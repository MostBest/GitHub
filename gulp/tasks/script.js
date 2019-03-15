module.exports = function () {
	$.gulp.task('script:lib', function() {
		return $.gulp.src([
				'./dev/static/libs/slick/slick.min.js',
			])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest('./build/assets/js'))
			.pipe($.bs.reload({
				stream: true
			}));
	});	

	$.gulp.task('script', function() {
		return $.gulp.src('./dev/static/js/main.js')
			.pipe($.gulp.dest('./build/assets/js'))
			.pipe($.bs.reload({
				stream: true
			}));
	});	

} 