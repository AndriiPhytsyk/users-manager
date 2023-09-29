const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Task to start a development server and enable hot reloading
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'

        },
    });

    // Watch HTML, CSS, and JavaScript files for changes and trigger a reload
    gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js']).on('change', browserSync.reload);
});

// Default task to start the development server and watch for changes
// gulp.task('default', ['serve']);
