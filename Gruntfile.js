// Gruntfile.js 
module.exports = function(grunt) {
	grunt.initConfig({
		bowerInstall: {
			target: {
				src: [
					'*.html'
				],
				exclude: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/'
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.registerTask('build', ['bowerInstall']);
	grunt.registerTask('default', ['build']);
};
