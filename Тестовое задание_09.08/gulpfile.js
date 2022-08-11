const { src, dest, series, watch } = require('gulp')

const concat = require('gulp-concat')

const htmlMin = require('gulp-htmlmin')

const autoprefixes = require('gulp-autoprefixer')

const cleanCSS = require('gulp-clean-css')

const browserSync = require('browser-sync').create()

const svgSprite = require('gulp-svg-sprite')

const image = require('gulp-image')

const babel = require('gulp-babel')

const notify = require('gulp-notify')

const del = require('del')

const sourcemaps = require('gulp-sourcemaps')

const uglify = require('gulp-uglify-es').default


const clean = () => {
    return del(['dist'])
}

const resources = () => {
    return src('src/resources/**')
        .pipe(dest('dist'))
}

const fonts = () => {
    return src('src/fonts/**')
        .pipe(dest('dist/fonts'))
}

const stylenormalize = () => {
    return src('src/stylenormalize/**')
        .pipe(dest('dist'))
}


const stylesDev = () => {
    return src('src/styles/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(autoprefixes({
            cascade: false,
        }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist'))
        // следит за изменением файлов
        .pipe(browserSync.stream())
}

const stylesProd = () => {
    return src('src/styles/**/*.css')
        .pipe(concat('main.css'))
        .pipe(autoprefixes({
            cascade: false,
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('dist'))
        // следит за изменением файлов
        .pipe(browserSync.stream())
}

const htmlDev = () => {
    return src('src/**/*.html')
        .pipe(dest('dist'))
        // следит за изменением файлов
        .pipe(browserSync.stream())
}

const htmlProd = () => {
    return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
        // следит за изменением файлов
        .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/images'))
}

const scriptsDev = () => {
    return src([
            'src/js/components/**/*.js',
            'src/js/**',
        ])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .on('error', notify.onError())
        .pipe(sourcemaps.write())
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const scriptsProd = () => {
    return src([
            'src/js/components/**/*.js',
            'src/js/**',
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .pipe(uglify().on('error', notify.onError()))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}


const images = () => {
    return src([
            'src/images/**/*.jpg',
            'src/images/**/*.png',
            'src/images/*.svg',
            'src/images/**/*.jpeg',
            'src/images/**/*.webp',
        ])
        .pipe(image())
        .pipe(dest('dist/images'))
        .pipe(browserSync.stream())
}

watch('src/**/*.html', htmlDev)
watch('src/styles/**/*.css', htmlProd)
watch('src/**/*.html', stylesDev)
watch('src/styles/**/*.css', stylesProd)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scriptsDev)
watch('src/js/**/*.js', scriptsProd)
watch('src/resources/**', resources)
watch('src/images/**', images)

exports.clean = clean
exports.build = series(clean, fonts, stylenormalize, resources, htmlDev, scriptsDev, stylesDev, images, svgSprites, watchFiles)
exports.production = series(clean, fonts, stylenormalize, resources, htmlProd, scriptsProd, stylesProd, images, svgSprites, watchFiles)
exports.default = series(clean, fonts, stylenormalize, resources, htmlProd, scriptsProd, stylesProd, images, svgSprites, watchFiles)