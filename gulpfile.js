var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function(){
    return gulp.src('src/main.jsx')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./public'));
});