module.exports = {
    "params": {
        "id": /^\d+$/,
        "range": {
            "file": "RangeParam"
        }
    },
    "middleware": {
        "description": "These are globally installed middleware functions",
        "head": [
            // Middleware Example
            {
                "name": "Default Middleware",
                "file": "DefaultMiddleware",
                "method": "defaultMiddleware"
            },
            // Middleware for UI translating
            {
                "name": "SwitchLanguage",
                "file": "LanguageMiddleware",
                "method": "switchLanguage"
            }
        ],
        "tail": []
    },
    "extensions": {
        // Dummy Extension Example
        "Default Extensions": {
            "file": "DefaultExtension"
        }
    },
    "routes": [
        {
            "description": "Entry point for application. Landing page",
            // Example of pattern with not-required `range` param
            // Try URLs: /123-456 and /123-a456
            "pattern": "/:range?",
            "controllers": ["DefaultController.indexAction"],
            "middleware": {
                "before": [],
                "after": []
            }
        },
        {
            "description": "Bootstrap Styles Page",
            // Check in URL without ID and with different ID (INT and not INT):
            // /bootstrap/a123 and /bootstrap/123
            "pattern": "/bootstrap/:id?",
            "controllers": ["DefaultController.bootstrapAction"],
            "middleware": {
                "before": [],
                "after": []
            }
        },
        {
            "description": "SignUp/SignIn Page",
            "pattern": "/login/",
            "controllers": ["AuthController.loginAction"]
        }
    ]
};
