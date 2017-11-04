const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync');


gulp.task('sass', function() {
  return gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: '' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('js/main.js', browserSync.reload);
})


gulp.task('default', ['watch'])
