const gulp = require('gulp');
const pug = require('gulp-pug');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const del = require('del');

const browserSync = require('browser-sync').create();

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// установленные мной:
const svgSprite = require('gulp-svg-sprites');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const csso = require('gulp-csso');


const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles/'
    },    
    images: {
        svg: 'build/assets/images/svg',
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    },
    fonts: {
        src: 'src/fonts/**/*.woff',
        src: 'src/fonts/**/*.woff2',
        dest: 'build/assets/fonts/'
    },
}

// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
    return gulp.src('./src/styles/app.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

// очистка
function clean() {
    return del(paths.root);
}

// webpack
function scripts() {
        return gulp.src('src/scripts/app.js')
        .pipe(plumber()) 
        .pipe(gulpWebpack(webpackConfig, webpack)) 
        .pipe(gulp.dest(paths.scripts.dest));
}

// галповский вотчер
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.fonts.src, fonts);
}

// локальный сервер + livereload (встроенный)
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// просто переносим картинки
function images() {
    return gulp.src(paths.images.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.images.dest));
}

// переносим шрифты
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.fonts.dest));
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.fonts = fonts;

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts, fonts, svg),
    gulp.parallel(watch, server),

));


// спрайты
function svg() {
    return gulp.src('src/images/svg/**/*.svg')
        .pipe(svgSprite({ mode: "symbols" }))
        .pipe(gulp.dest(paths.images.svg))
}

gulp.task('svg-sprite', svg)