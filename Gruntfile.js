// Reg Sengkey <sengkey at gmail dot com>
// Semantic UI Less Master CSS for everyone

module.exports = function(grunt) {
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		jshint: {
		      files: ['Gruntfile.js', 'src/**/*.js', 'javascript/*.js'],
		      options: {
		        // options here to override JSHint defaults
		        globals: {
		          jQuery: true,
		          console: true,
		          module: true,
		          document: true
		        }
		      }
		    },

	    // less: {
	    //     development: {
	    //         options: {
	    //         	paths : ['less'],
	    //             compress: false,

					// // LESS source maps
					// // To enable, set sourceMap to true and update sourceMapRootpath based on your install
					// sourceMap: true,
					// sourceMapFilename: "css/semantic.css.map", //Write the source map to a separate file with the given filename.
					// sourceMapBasepath: "css/" //Sets the base path for the Less file paths in the source map.
					// //sourceMapRootpath: "/"
	    //         },
	    //         files: {
	    //             // target.css file: source.less file
	    //             "css/mysemantic.css" : ["src/semantic.less"]

	    //         }
	    //     }
	    // },

	    less: {
	      compileCore: {
	        options: {
	          strictMath: true,
	          sourceMap: true,
	          outputSourceFiles: true,
	          sourceMapURL: '<%= pkg.name %>.css.map',
	          sourceMapFilename: 'css/<%= pkg.name %>.css.map'
	        },
	        files: {
	          'css/<%= pkg.name %>.css': 'less/bootstrap.less'
	        }
	      },
	      compileTheme: {
	        options: {
	          strictMath: true,
	          sourceMap: true,
	          outputSourceFiles: true,
	          sourceMapURL: '<%= pkg.name %>-theme.css.map',
	          sourceMapFilename: 'css/<%= pkg.name %>-theme.css.map'
	        },
	        files: {
	          'css/<%= pkg.name %>-theme.css': 'less/style-frontpage.less'
	        }
	      },
	      minify: {
	        options: {
	          cleancss: true,
	          report: 'min'
	        },
	        files: {
	          // 'css/*.min.css': 'css/*.css',		
	          'css/<%= pkg.name %>.min.css': 'css/<%= pkg.name %>.css',
	          'css/<%= pkg.name %>-theme.min.css': 'css/<%= pkg.name %>-theme.css'
	        }
	      }
	    },

		// cssmin: {
		//   minify: {
		//     expand: true,
		//     cwd: 'css/',
		//     src: ['*.css', '!*.min.css'],
		//     dest: 'css/cssmin/',
		//     ext: '.min.css'
		//   }
		// }, 

	    watch: {
	        styleLess: {
	            // Which files to watch (all .less files recursively in the less directory)
	            files: ['less/*.less'], //'src/**/*.less',
	            tasks: ['less'], // 'rsync:prod'
	            options: {
	            	// Start a live reload server on the default port 35729
	                livereload: true
	            }
	        },
	        styleCss: {
	            // Which files to watch (all .less files recursively in the less directory)
	            files: ['css/*.css'],
	            // tasks: ['less:minify'],
	            options: {
	            	// Start a live reload server on the default port 35729
	                livereload: true
	            }
	        },
	        staticFiles: {
	            // Which files to watch (all .html .php files recursively in the dist directory)
	            files: ['**/*.html', 'js/*.js'],
	            //tasks: ['copy:htmls'],
	            options: {
	            	// Start a live reload server on the default port 35729
	                livereload: true
	            }
	        }
	    }

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-contrib-less');
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-contrib-watch');

	// grunt.loadNpmTasks('grunt-webfont');

	// grunt.loadNpmTasks('grunt-fontgen');

	// grunt.loadNpmTasks('grunt-rsync');

	grunt.registerTask('default', ['less','watch']);

};