module.exports = function () {
	$.gulp.task('img:dev', function() {
		return $.gulp.src('./dev/static/img/**/*')
			.pipe($.gp.newer('./build/assets/img'))
			.pipe($.gulp.dest('./build/assets/img'));
	});

	$.gulp.task('img:build', function() {
		return $.gulp.src('./dev/static/img/**/*')
			.pipe($.gp.tinypng('0b5S7W93jJNKDgtx8q2d56dRwB4d8dB3'))
			.pipe($.gulp.dest('./build/assets/img'));
	});
}