module.exports = {
    "concat": {
        "default-js": {
            "src": [
                "modules/default/assets/js/*.js",
                "modules/default/assets/js/**/*.js"
            ],
            "dest": "public/build/<%= pkg.version %>/js/default-module.<%= pkg.version %>.js"
        },
        "default-css": {
            "src": [
                "modules/default/assets/css/*.css",
                "modules/default/assets/css/**/*.css"
            ],
            "dest": "public/build/<%= pkg.version %>/css/default-module.<%= pkg.version %>.css"
        }
    },
    uglify: {
        "default": {
            files: {
                'public/build/<%= pkg.version %>/js/default-module.<%= pkg.version %>.min.js': ['public/build/<%= pkg.version %>/js/default-module.<%= pkg.version %>.js']
            }
        },
        options: {
            compress: true
        }
    },
    cssmin: {
        "default": {
            files: {
                'public/build/<%= pkg.version %>/css/default-module.<%= pkg.version %>.min.css': ['public/build/<%= pkg.version %>/css/default-module.<%= pkg.version %>.css']
            }
        }
    },
    copy: {
        "default-img": {
            files: [
                {
                    expand: true,
                    flatten: true,
                    //filter: 'isFile',
                    src: ["modules/default/assets/img/*.*"],
                    dest: 'public/build/<%= pkg.version %>/img/default'
                }
            ]
        },
        "default-fonts": {
            files: [
                {
                    expand: true,
                    flatten: true,
                    //filter: 'isFile',
                    src: ["modules/default/assets/fonts/*.*"],
                    dest: 'public/build/<%= pkg.version %>/fonts/default'
                }
            ]
        }
    }
};
