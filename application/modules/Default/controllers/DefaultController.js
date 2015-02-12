"use strict";

/**
 * @type Object Default Controller
 */
module.exports = function () {
    /**
     * Main Page
     *
     * @param req
     * @param res
     */
    this.indexAction = function (req, res) {
        var self = this;
        res.render('Default/views/pages/Default/index', {
            message: res.defaultMiddlewareMessage || '',
            variable: twee.getConfig('default:common:variable')
        });
    };

    /**
     * Bootstrap Styles Page
     * @param req
     * @param res
     */
    this.bootstrapAction  = function (req, res) {
        var self = this;
        res.render('Default/views/pages/Default/bootstrap');
    };
};
