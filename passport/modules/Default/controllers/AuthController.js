var session = require('express-session');

module.exports = function() {

    /**
     * Setting up passport for authenticating
     */
    this.init =  function () {
        var self = this;

        // Usual twitter, facebook and others callback
        twee.on('passport.Strategy.Callback', function(){
            var data = twee.get('passport.Strategy.Data');
            session.user = data.arguments[2];
            data.done();
        });

        // Here we can serialize user
        twee.on('passport.serializeUser', function(){
            //console.log('Serialize callback!');
            //console.log(twee.get('passport.serializeUser'));
        });

        // We can access nonce here and check it, this implementation is required for digest auth
        twee.on('passport.Strategy.Digest.Params', function(){
            var params = twee.get('passport.Strategy.Digest.Params');
            console.log('Digest Params: ', params);
            params.done(null, true);
        });

        // Digest callback will authenticate or not the user
        twee.on('passport.Strategy.Digest.Callback', function(){
            var data = twee.get('passport.Strategy.Data');
            session.user = {username: 'admin', password: 'pw'};
            return data.done(null, session.user, session.user.password);
        });

        // Basic callback will authenticate or not the user
        twee.on('passport.Strategy.Basic.Callback', function(){
            var data = twee.get('passport.Strategy.Data');
            session.user = {username: 'admin', password: 'pw1'};
            if (data.password != session.user.password || data.username != session.user.username) {
                return data.done(null, false);
            }
            return data.done(null, session.user);
        });
    };

    /**
     * Signup action that renders signup form
     * @param req
     * @param res
     */
    this.loginAction =  function (req, res) {
        var self = this;
        res.render('Default/views/pages/Default/login', {
            user: session.user
        });
    }
};
