module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			options: {
            	outputStyle: 'nested',
            	sourceMap: false
	        },
	        dist: {
	            files: {
	                './public/styles/site.css': './public/styles/sass/site.scss'
	            }
        	}
		},
	});

	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['sass']);
};