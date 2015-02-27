module.exports = {
    "extensions": {
        "i18n": {
            "module": "twee-i18n-extension",
            "dependencies": {
                "Cookies": {
                    "module": "twee-cookies-extension"
                }
            }
        },
        "Passport": {
            "module": "twee-passport-extension"
        },
        "HTML Compressor": {
            dependencies: {
                "Session": {
                    "disabled": true
                }
            }
        }
    },
    "options": {
        "errorPages": {
            "404": {
                "viewTemplate": __dirname + "/../views/common/pages/404.html"
            }
        }
    },

    "extension": {
        "twee-passport": {
            "disabled": false,
            "redirects": {
                "successRedirect": "/login",
                "failureRedirect": "/login"
            },
            "strategies": {
                "google": {
                    "module": "passport-google",
                    "disabled": false,
                    "credentials": {
                        "returnURL": "http://127.0.0.1:3000/auth/google/return",
                        "realm": "http://127.0.0.1:3000/",
                        "iis": "YOUR-DEVELOPER-ACCOUNT0@developer.gserviceaccount.com"
                    },
                    "urls": {
                        "redirect": "/auth/google",
                        "callback": "/auth/google/return"
                    },
                    "options": {
                        "scope": "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
                    }
                },

                "twitter": {
                    "module": "passport-twitter",
                    "disabled": false,
                    "credentials": {
                        "consumerKey": "CONSUMER_KEY",
                        "consumerSecret": "CONSUMER_SECRET",
                        "callbackURL": "http://127.0.0.1:3000/auth/twitter/callback/"
                    },
                    "urls": {
                        "redirect": "/auth/twitter",
                        "callback": "/auth/twitter/callback/*"
                    }
                },

                "facebook": {
                    "module": "passport-facebook",
                    "disabled": false,
                    "credentials": {
                        "clientID": "CLIENT_ID",
                        "clientSecret": "CLIENT_SECRET",
                        "callbackURL": "http://127.0.0.1:3000/auth/facebook/callback"
                    },
                    "urls": {
                        "redirect": "/auth/facebook",
                        "callback": "/auth/facebook/callback"
                    },
                    "options": {
                        "scope": "email"
                    }
                },

                "linkedin": {
                    "module": "passport-linkedin",
                    "disabled": false,
                    "credentials": {
                        "consumerKey": "CONSUMER_KEY",
                        "consumerSecret": "CONSUMER_SECRET",
                        "callbackURL": "http://127.0.0.1:3000/auth/linkedin/callback",
                        "profileFields": ["id", "first-name", "last-name", "email-address", "headline"]
                    },
                    "urls": {
                        "redirect": "/auth/linkedin",
                        "callback": "/auth/linkedin/callback"
                    },
                    "options": {
                        "scope": ["r_fullprofile", "r_emailaddress"]
                    }
                },

                "digest": {
                    "module": "passport-http",
                    "disabled": false,
                    "options": {

                    },
                    "authUrlPattern": ["/"]
                },

                "basic": {
                    "module": "passport-http",
                    "disabled": false,
                    "options": {

                    },
                    "authUrlPattern": ["/bootstrap"]
                }
            }
        }
    }
};
