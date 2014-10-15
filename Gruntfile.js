module.exports = function(grunt){
    
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            main: [
                'js/main.js'
            ],
            js: [
                'js/libs/jquery/dist/jquery.js',
                'js/libs/unslider/src/unslider.js',
                'js/libs/moment/moment.js',
                'js/libs/underscore/underscore.js',
                'js/libs/clndr/src/clndr.js',
                'js/libs/jquery-mousewheel/jquery.mousewheel.js',
                'js/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
                'js/libs/Picker/jquery.fs.picker.js',
            ],
            min_js: [
                'js/libs/jquery/dist/jquery.min.js',
                'js/libs/unslider/src/unslider.min.js',
                'js/libs/moment/min/moment.min.js',
                'js/libs/underscore/underscore-min.js',
                'js/libs/clndr/clndr.min.js',
                'js/libs/jquery-mousewheel/jquery.mousewheel.min.js',
                'js/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                'js/libs/Picker/jquery.fs.picker.min.js'
            ]
        },
        concat: {
            options: {
                seperator: ';'
            },
            dist: {
                src: [
                    'js/libs/unslider/src/unslider.min.js',
                    'js/libs/moment/min/moment.min.js',
                    'js/libs/underscore/underscore-min.js',
                    'js/libs/clndr/clndr.min.js',
                    'js/libs/jquery-mousewheel/jquery.mousewheel.min.js',
                    'js/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                    'js/libs/Picker/jquery.fs.picker.min.js',
                    'js/main.js'
                ],
                dest: 'js/dist/concat.js'
            }
        },

        uglify: {
            all: {
                files: {
                    'js/dist/min.js': [
                        'js/libs/unslider/src/unslider.min.js',
                        'js/libs/moment/min/moment.min.js',
                        'js/libs/underscore/underscore-min.js',
                        'js/libs/clndr/clndr.min.js',
                        'js/libs/jquery-mousewheel/jquery.mousewheel.min.js',
                        'js/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                        'js/libs/Picker/jquery.fs.picker.min.js',
                        'js/main.js'
                    ]
                }
            },
            jquery: {
                files: {
                    'js/dist/jquery.min.js': ['js/libs/jquery/dist/jquery.min.js']
                }
            }
        },
        imagemin: {                          // Task
            
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/originals',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'img/'                  // Destination path prefix
                }]
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint:main', 'uglify:all', 'newer:imagemin']);
}