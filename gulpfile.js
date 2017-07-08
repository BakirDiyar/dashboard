const gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	plumber = require('gulp-plumber'),
	browser = require('browser-sync');


gulp.task('server', function() {

	var server= {
		server:{
			baseDir : './'
		}
	}
    
    browser.init(server)
});
	

gulp.task('stylus', function() {
	var minify ={
		compress : true
	}
    gulp.src('stylus/style.styl')
      .pipe(plumber())
      .pipe(stylus(minify))
      .pipe(gulp.dest('./css'));
});
	

gulp.task('watch', function() {
   	gulp.watch('stylus/style.styl', ['stylus']);
});
	

// gulp.task('name',['tasks'], function() {
//     // content
// });
	

gulp.task('default',['server', 'stylus', 'watch'])
	
