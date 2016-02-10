var gulp = require('gulp');
var filter = require('gulp-filter');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');

gulp.task('copy', function() {
	var jsFilter = filter(['*.js', '!jquery.js', '!bootstrap.js'], {restore: true});
	var cssFilter = filter('*.css', {restore: true});
	return gulp.src(mainBowerFiles())
		.pipe(jsFilter)
		.pipe(gulp.dest('public/js/'))
		.pipe(jsFilter.restore)
		.pipe(cssFilter)
		.pipe(gulp.dest('public/css'))
		.pipe(cssFilter.restore)
});

gulp.task('inject', ['copy'], function() {
	var target = gulp.src(['public/*.html']);
	var source = gulp.src(['public/js/angular.js', 'public/js/*.js', 'public/css/*.css']);
	return target
		.pipe(inject(source, {read: false, relative: true}))
		.pipe(gulp.dest('public'));
});

gulp.task('dev', ['copy', 'inject']);
gulp.task('dist', ['copy']);
gulp.task('default', ['dist']);