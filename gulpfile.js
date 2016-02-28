var gulp = require('gulp');

	var browserSync = require('browser-sync').create();

	var concatCss = require('gulp-concat-css');
	var rename = require('gulp-rename');
	var minifyCss = require('gulp-minify-css');
	// var notify = require("gulp-notify");
	 
gulp.task('default', function () {
 	return gulp.src('css/*.css')
	.pipe(concatCss('bundle.css'))
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(rename('bundle.min.css'))
	.pipe(gulp.dest('app/css'))
	// .pipe(notify('Done!'));
});

// Static Server + watching css/html files
gulp.task('serv', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("*.html" ).on('change', browserSync.reload);
    gulp.watch("app/css/*.css" ).on('change', browserSync.reload);
});

gulp.task('watch', function(){
	gulp.watch('css/*.css', ['default']);
})

