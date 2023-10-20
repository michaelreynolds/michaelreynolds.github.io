const gulp				 	= require('gulp');
const sass					= require('gulp-sass');
const browserSync		= require('browser-sync').create();
// const autoprefixer 	= require('gulp-autoprefixer');

//compile scss into css
function style() {
		return gulp.src('stylesheets/style.sass')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('stylesheets'))
		.pipe(browserSync.stream());
}

function watch() {
		browserSync.init({
				server: {
					 baseDir: "./",
					 index: "/index.html"
				}
		});
		gulp.watch('stylesheets/*.sass', style)
    gulp.watch('stylesheets/*.scss', style)
		gulp.watch('./*.html').on('change',browserSync.reload);
		gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.watch = watch;


//
// // Compile Sass & Inject Into Browser
// gulp.task('sass', function() {
// 		return gulp.docs([
// 			'docs/scss/main.sass'
// 		])
// 				.pipe(sass())
// 				// .pipe(autoprefixer({
// 				// 	"browserslist": ["defaults"]
// 				// }))
// 				.pipe(gulp.dest("docs/css"))
// 				.pipe(sass().on('error', sass.logError))
// 				.pipe(browserSync.stream());
// });
//
//
// // Watch Sass & Serve
// gulp.task('serve', gulp.series(['sass']), function() {
// 		browserSync.init({
// 				server: "./docs"
// 		});
//
// 		gulp.watch(['docs/scss/*.sass'], gulp.parallel(['sass']));
// 		gulp.watch(['docs/scss/*.scss'], gulp.parallel(['sass']));
// 		gulp.watch("docs/*.html").on('change', browserSync.reload);
// });
//
// // Default Task
// // gulp.task('default', ['serve']);
//
// gulp.task('default', gulp.series(['serve']));
//
// // exports.default = defaultTask
