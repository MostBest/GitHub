module.exports = function () {
	$.gulp.task('font', function() {
		return $.gulp.src([
				'../../FONTS/Roboto/**/*'
			])
			.pipe($.gp.newer('build/assets/fonts'))
			.pipe($.gulp.dest('build/assets/fonts'))
			.pipe($.bs.reload({
				stream: true
			}));
	});	
}