module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        stripBanners: true,
        banner: '/* Compiled file! <%= pkg.name %> - v<%= pkg.version %> - ' +
        	'<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      app: {
        dest: 'public/app.js',
        src: [
	        'app/models/*.js',
	        'app/collections/*.js',
          'app/views/*.js',
	        // 'app/helpers/*.js',
	        'app/*.js',
        ],
      },

      assets: {
      	dest: 'public/libs.js',
      	src: [
      		'assets/js/jquery.js',
          'assets/js/underscore.js',
          'assets/js/backbone.js',
      		'assets/js/bootstrap.js',
      		'assets/js/handlebars.js',
          'assets/js/template.js',
      		'assets/js/jquery.twbsPagination.js',
      	]
      }

    },

    less: {
    	development: {
    		options: {
    			paths: ['less']
    		},
    		files: {
    			'public/app.css': 'assets/less/*.less',
    		}
    	}
    },

    concat_css: {
    	all: {
    		src: [
          'assets/css/bootstrap.css',
          'assets/css/font-awesome.min.css',
    		],
    		dest: 'public/style.css'
    	}
    },

    handlebars: {
      compile: {
        options: {
          namespace: false
        },
        files: {
          'public/compiledTemplate.js': 'app/tpl/*.hbs',
          
        }
      }
    },

    watch: {
      scripts: {
        files: ['assets/js/*.js', 'app/**/*.js', 'app/*.js'],
        tasks: ['concat'],
        options: {
          interrupt: true
        }
      },
      templates: {
        files: 'app/tpl/*.hbs',
        tasks: ['handlebars'],
        options: {
          interrupt: true
        }
      },
      less: {
        files: 'assets/less/*.less',
        tasks: [ 'less' ],
        options: {
          interrupt: true
        }
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default tasks
  grunt.registerTask('default', ['less', 'concat', 'concat_css', 'handlebars', 'watch']);
};