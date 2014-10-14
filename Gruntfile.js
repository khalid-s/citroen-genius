module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({

        concat: {
            options: {
                separator: ';'
            },
            dist_min: {
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
                dest: 'js/dist/concat.min.js',
            },
            dist: {
                src: [
                      'js/libs/unslider/src/unslider.js', 
                      'js/libs/moment/moment.js',
                      'js/libs/underscore/underscore.js',
                      'js/libs/clndr/src/clndr.js',
                      'js/libs/jquery-mousewheel/jquery.mousewheel.js',
                      'js/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
                      'js/libs/Picker/jquery.fs.picker.js',
                      'js/main.js'
                ],
                dest: 'js/dist/concat.js',
            }
        },
        jshint: {
            concat_min: ['js/dist/concat.min.js'],
            concat: ['js/dist/concat.js'],
            js_min: [
                      'js/libs/underscore/underscore-min.js',
                      'js/libs/unslider/src/unslider.min.js', 
                      'js/libs/moment/min/moment.min.js',
                      'js/libs/clndr/clndr.min.js',
                      'js/libs/jquery-mousewheel/jquery.mousewheel.min.js',
                      'js/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                      'js/libs/Picker/jquery.fs.picker.min.js',
                      'js/main.js'
            ],
            js: [
                'js/libs/unslider/src/unslider.js', 
                'js/libs/moment/moment.js',
                'js/libs/underscore/underscore.js',
                'js/libs/clndr/src/clndr.js',
                'js/libs/jquery-mousewheel/jquery.mousewheel.js',
                'js/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
                'js/libs/Picker/jquery.fs.picker.js',
                'js/main.js'
            ]
        },
        uglify: {
            dist: {
                files: {
                    'js/dist/min/all.min.js': ['js/dist/concat.min.js'],
                    'js/dist/min/jquery.min.js': ['js/libs/jquery/dist/jquery.js']
                }
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);
}