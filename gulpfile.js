const { src, dest, watch, parallel, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();



const styles = () => {
  return src('src/scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'] }))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
};

const scripts = () => {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'src/js/main.js'
  ])
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(dest('src/js'))
    .pipe(browserSync.stream());
};

const images = () => {
  return src('src/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest('dist/images'));
};

const cleanDist = () => {
  return src('dist', { read: false, allowEmpty: true })
    .pipe(clean());
};

const building = () => {
  return src([
    'src/**/*.html',
    'src/css/style.min.css',
    'src/js/main.min.js'
  ], { base: 'src' })
    .pipe(dest('dist'));
};

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: "src/"
    }
  });
};

const watching = () => {
  watch(['src/scss/**/*.scss'], styles);
  watch(['src/js/**/*.js', '!src/js/main.min.js'], scripts);
  watch(['src/**/*.html']).on('change', browserSync.reload);
};



exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.building = building;
exports.browsersync = browsersync;
exports.watching = watching;

exports.build = series(cleanDist, images, building);
exports.default = parallel(styles, scripts, browsersync, watching);