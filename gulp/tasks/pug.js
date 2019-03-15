module.exports = function () {
	$.gulp.task('pug', function() {
		return $.gulp.src('./dev/pug/index.pug')
			.pipe($.gp.pug({
				pretty: true
			}))
			// .pipe($.gp.rename('index.html'))
			.pipe($.gulp.dest('./build'))
			.on('end', $.bs.reload);
	});
}