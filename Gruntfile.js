module.exports = function (grunt) {  
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);  
    
		// Project configuration.  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'), 

		// configure jshint to validate js files -----------------------------------
		jshint: {
			options: {
				reporter: require('jshint-stylish'), // use jshint-stylish to make our errors look and read good
				ignores: 'src/js/libs/*.js'
			},

			// when this task is run, lint the Gruntfile and all js files in src
			build: ['Gruntfile.js', 'src/**/*.js']
		},
		
        cssmin: {  
			options: { 
					compress: true,
					keepSpecialComments: 0,
					banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n* /\n'  
			},  
			
			build: {
				files: {  
						'dist/css/visual-designer.min.css': 'dist/css/visual-designer.css' /*[  
								'src/css/libs/*.css',   
								'src/css/*.css']*/
				}  
			}
        },

				// compile less stylesheets to css -----------------------------------------
		less: {
				options: {  
						//banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
    			},
				build: {
					files: {
						 'dist/css/visual-designer.css': [
						 'node_modules/bootstrap/less/bootstrap.less',
						 'node_modules/font-awesome/less/font-awesome.less',
						 'node_modules/medium-editor/dist/css/medium-editor.min.css',
						 'node_modules/spectrum-colorpicker/spectrum.min.css',
						 'src/less/*.less'
						 ]
					}
				}
		},

		/*concat: {
		    /*options: {
		      separator: '',
		    },* /
		    dist: {
		      src: ['src/css/tmp/libs.css', 'src/css/tmp/visual-designer.css'],
		      dest: 'dist/css/visual-designer.min.css',
		    },
		},*/
				
        uglify: {  
            options: {  
                compress: true,
								banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
						build: {
							files: {
								'dist/js/visual-designer.min.js': [
										'node_modules/jquery/dist/jquery.min.js',
										'node_modules/jquery-ui/dist/jquery-ui.js',  
										'node_modules/bootstrap/dist/js/bootstrap.min.js',
										//'node_modules/medium-editor/dist/js/medium-editor.min.js',  
										//'node_modules/spectrum-colorpicker/spectrum.min.js',  
										'src/js/*.js']
										// 'src/js/menu.js',
										// 'src/js/canvas.js',
										// 'src/js/visual-designer.js']
							}
						}
        },

		// configure watch to auto update ----------------
		watch: {
			
				// for stylesheets, watch css and less files 
				// only run less and cssmin 
				stylesheets: { 
					files: ['src/less/*.less'], 
					tasks: ['less', 'cssmin'] 
				},

				// for scripts, run jshint and uglify 
				scripts: { 
					files: 'src/js/*.js', 
					tasks: ['jshint', 'uglify'] 
				} 
		}
				
    });  
		
    // Default task.  
    grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin']);

    grunt.registerTask('build-watch', ['jshint', 'uglify', 'less', 'cssmin', 'watch']);  
};