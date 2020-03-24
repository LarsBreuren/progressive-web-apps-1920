const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat-css');

gulp.task('minify', () => {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/css/minified'));
});

gulp.task('default', function(){
    gulp.watch('public/css/*.css', gulp.series('minify'))
    return
});