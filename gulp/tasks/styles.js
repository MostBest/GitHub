module.exports = function () {
	$.gulp.task('style:lib', function() {
		return $.gulp.src([
				'./dev/static/libs/slick/slick.css',
				'./dev/static/libs/slick/slick-theme.css'
			])
			.pipe($.gp.concatCss('libs.min.css'))
			.pipe($.gp.csso({
				restructure: true
			}))
			.pipe($.gulp.dest('/build/assets/css'))
			.pipe($.bs.reload({
				stream: true
			}));
	});	

} 