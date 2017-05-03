module.exports = function(grunt) {
    "use strict";

    /*Main Config*/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Uglify
        uglify: {
            options: {
                mangle: true,
                compress: true
            },
            buildProd: {
                options: {
                    compress: {
                        drop_console: true
                    }
                },
                src: 'src/assets/js/global.js',
                dest: 'prod-build/assets/js/global.js',
                report: 'min'
            }
        },

        htmlmin: { // Task
            buildProd: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'prod-build/index.htm': 'src/index.htm', // 'destination': 'source'
                    'prod-build/404.htm': 'src/404.htm' // 'destination': 'source'
                }
            }
        },

        cssmin: {
            options: {
                report: 'min',
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            buildProd: {
                files: {
                    'prod-build/assets/css/style.css': ['src/assets/css/style.css']
                }
            }
        },

        // JSHint
        jshint: {
            options: {
                jshintrc: '.jshintrc.config',
                reporterOutput: "",
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            assetsjs: {
                src: 'src/assets/js/global.js'
            }
        },

        copy: {
            main: {
                cwd: 'src/', // set working folder / root to copy
                src: '**', // copy all files and subfolders
                dest: 'prod-build/', // destination folder
                expand: true, // required when using cwd
                flatten: false
            },
        },

        csslint: {
            // options: {
            //     csslintrc: '.csslintrc',
            //     formatters: [{
            //         id: 'junit-xml',
            //         dest: 'report/csslint_junit.xml'
            //     }, {
            //         id: 'csslint-xml',
            //         dest: 'report/csslint.xml'
            //     }]
            // },
            strict: {
                options: {
                    import: 2
                },
                src: ['src/assets/css/style.css']
            }
        }

    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['copy', 'jshint', 'uglify', 'htmlmin', 'cssmin']);
    grunt.registerTask('hint', ['csslint']);
};