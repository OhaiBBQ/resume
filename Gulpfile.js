const scss = require('gulp-scss'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream');


gulp.task('js', function() {
    return browserify({
        entries: ['app/main.js'],
        extensions: ['js'],
        debug: true
    })
        .transform(babelify, { presets: ['env', 'react', 'es2015'] })
        .bundle()
        .pipe(source('app/main.js'))
        .pipe(gulp.dest('public/build'));
});


gulp.task('scss', function() {
    gulp.src(
        'app/stylesheets/index.scss'
    ).pipe(scss(
        {'bundleExec': true}
    )).pipe(gulp.dest('public/build/app/stylesheets'));
});


gulp.task('default', ['scss', 'js']);
