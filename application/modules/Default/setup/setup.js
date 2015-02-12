module.exports = {
    "params": {},
    "middleware": {
        "description": "These are globally installed middleware functions",
        "head": {
            "Default Middleware": {
                "file": "DefaultMiddleware",
                "method": "defaultMiddleware"
            }
        },
        "tail": {}
    },
    "extensions": {
        "Default Extensions": {
            "file": "DefaultExtension"
        }
    },
    "routes": [
        {
            "description": "Entry point for application. Landing page",
            "pattern": "/",
            "controllers": ["DefaultController.indexAction"],
            "middleware": {
                "before": {},
                "after": {}
            }
        },
        {
            "description": "Bootstrap Styles Page",
            "pattern": "/bootstrap/",
            "controllers": ["DefaultController.bootstrapAction"],
            "middleware": {
                "before": {},
                "after": {}
            }
        }
    ]
};
