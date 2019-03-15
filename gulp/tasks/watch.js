module.exports = function () {
	$.gulp.task('watch', function () {
	  $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
	  $.gulp.watch('./dev/static/sass/**/*.sass', $.gulp.series('sass'));
	  $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('script'));
	  $.gulp.watch('./dev/static/img/**/*', $.gulp.series('img:dev'));
	});
}