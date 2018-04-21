const gulp = require('gulp'),
      gp = require('gulp-load-plugins')(),
      browserSync = require('browser-sync').create(),
      importcss = require('postcss-import'),
      autoprefixer = require('autoprefixer'),
      urlcss = require('postcss-url'),
      reload = browserSync.reload;

// server
gulp.task('server', function() {
  browserSync.init({
    open: false,
    notify: false,
    server: {
      baseDir: './public',
    }
  });
});

gulp.task('css', function(){
  gulp.src('./source/css/style.css')
    .pipe(gp.plumber())
    .pipe(gp.postcss([
      importcss(),                                     // импортируем пути
      urlcss(),                                        // правит пути
      autoprefixer('last 2 version')
    ]))
    .pipe(gulp.dest('./public/css'))
    .pipe(gp.csso())
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/css/'))
    .pipe(reload({stream : true}));
});

gulp.task('html', function() {
  gulp.src('./source/index.html')
    .pipe(gulp.dest('./public'))
    .pipe(reload({stream : true}));
});

// images for content
gulp.task('images',  function() {
  gulp.src('./source/img/**/*.{png,jpg,jpeg,svg}')
    .pipe(gp.plumber())
    .pipe(gp.imagemin([
      gp.imagemin.jpegtran({progressive: true}),
      gp.imagemin.optipng({optimizationLevel: 3}),
      gp.imagemin.svgo()
    ]))
    .pipe(gulp.dest('./public/img/'))
    .pipe(reload({stream : true}));
});

gulp.task('scripts', function () {
  gulp.src('./source/js/app.js')
    .pipe(gp.jslint())
    .pipe(gp.plumber())
    .pipe(gulp.dest('./public/js/'))
    .pipe(gp.uglify())
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/js/'))
    .pipe(reload({stream : true}));
});

gulp.task('fonts', function() {
  return gulp.src('./source/fonts/**/*')
  .pipe(gulp.dest('./public/fonts'));
});

gulp.task('watch', () => {
  gulp.watch('source/fonts/*', ['fonts']);
  gulp.watch('source/*.html', ['html']);
  gulp.watch('source/css/*.css', ['css']);
  gulp.watch('source/img/*', ['images']);
  gulp.watch('source/js/*.js', ['scripts']);
});

gulp.task('default', [
  'fonts',
  'css',
  'html',
  'scripts',
  'images',
  'server', 'watch'
  ]);
