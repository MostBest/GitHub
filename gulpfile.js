'use strict';

global.$ = {
	paths: 		{
		tasks: require('./gulp/config/tasks.js')
	},
	gulp: 	require('gulp'),
	gp: 		require('gulp-load-plugins')(),
	bs: 		require('browser-sync').create()
};

$.paths.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

// script 			- статичный js фаил с настройками
// newer 				- фильтр, не пропускает из потока уже существующие файлы
// notify 			- выводит уведомления об ошибках
// sourcemaps 	- добавляет пометки с именами исходников в выходной файл

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel(
		'pug', 
		'style:lib', 
		'sass', 
		'script:lib', 
		'script', 
		'img:dev'
	),
	$.gulp.parallel(
		'watch', 
		'serve'
	)
));

$.gulp.task('build', $.gulp.series(
	$.gulp.parallel(
		'pug', 
		'style:lib', 
		'sass', 
		'script:lib', 
		'script', 
		'img:build'
	),
	$.gulp.parallel(
		'serve'
	)
));
