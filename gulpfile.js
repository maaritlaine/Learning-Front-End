var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var inject = require('gulp-inject');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');

// The reference to the configuration: paths, files and other variables used in gulp tasks. In json format.
var config = require('./gulp.config.js')();
// Note that you need to _load_ the gulp.config file. Hence the (); in the end.


// T H E   B U I L D   T A S K
// The umbrella task for various tasks executed during the build.
// RUN-SEQUENCE is for executing tasks in a particular order. 
// Note that because inject task requires other tasks to be run before it executes, also
// those tasks end up included in the build tasks.
gulp.task('build', function(done){
    runSequence('clean', 'copy-fonts', 'copy-templates', 'copy-images', 'inject', done);
});


// C L E A N
// Deletes all files in the build directory. DEL //TODO: explain

// THE GENERAL RULE ABOUT THE DONE PARAMETER //TODO: explain
gulp.task('clean', function (done) {
    return del(config.clean, done);
});



// C O D E   A N A L Y S I S
// JSHINT looks up for errors and issues in the code.
// JSCS checks whether the code adhers to coding conventions listed in .jscsrc file. You can modify the rules.
// Results are then reported to the user. JSHINT-STYLISH and FAIL are reporters that are passed as parameters
// to jshint. They write our messages in different colours for the viewer convenience.
// Remember to RETURN the result of the task!!

gulp.task('vet', function () {

    return gulp.src(config.vet)
    //.pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));

});

// J S   P R O C E S S I N G
// JS-files are processed before publish. They are concatenated = put into one file, uglified = minified  
// i.e compressed, revisioned = marked with content specific hashtag. 
// There are several source files and one destination file.
// Third-party js-files (lib) are handled separate from the application specific ones (app).

// THE GENERAL IDEA OF THE GULP PIPE
// The gulp pipe starts from the top. Source file (src) is passed into the pipe.
// Then the source file moves down the pipeline and is modified by different plugins (concat, uglify etc.).
// In the end, the modified file is saved in the destination file or folder (dest).

gulp.task('process-lib-js', function () {
    return gulp.src(config.js.src.lib)
        .pipe(concat(config.js.concat.lib))
       // .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('process-app-js', function () {
    return gulp.src(config.js.src.app)
        .pipe(concat(config.js.concat.app))
        // .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest));
});

//gulp.task('ng-annotate-app-js', function () {

//    return (gulp.src(config.js.src.app))
//        .pipe(ngAnnotate())
//        .pipe(gulp.dest(config.js.src.app));
//});

// C S S   P R O C E S S I N G
// Style sheets are processed before publish. SASS and LESS files are converted into CSS,
// because that is the forma in which the client undestands style.
// The files are concatenated = put into one file, minified = compressed and 
// revisioned = marked with content specific hashtag. 
// There are several source files and one destination file.
// Third-party style files (lib) are handled separate from the application specific ones (app).

gulp.task('process-lib-css', function () {
    return gulp.src(config.css.src.lib)
        .pipe(minifyCss())
        .pipe(concat(config.css.concat.lib))
        .pipe(rev())
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('process-app-css', function () {
    return gulp.src(config.css.src.app)
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest(config.css.dest));
});

// H T M L   I N J E C T I O N S
// References to css and javascript files are injected.
// Benefit from this is that all the reference paths can be stored in gulp.config.js -file
// and the minified, uglified, prettyfied, concatenated etc. resources can be linked into the
// HTML on the fly when the build is done.
// Injection means that you have a file (such as index.html) and you add (inject) code in it dynamically.
// Because there are placeholders in the target file, you can inject stuff in the middle and not just append the file.

// A GENERAL RULE ABOUT EXECUTION ORDER
// The tasks listed in brackets as an optional parameter passed to gulp.task function are
// executed before the actual task is run. Note however, that the listed tasks are run in paraller
// and not in sequence. 

//TODO: explain what's being done here
// Read: false means that the files are not read into memory during the process.
// Ignore path: 'build' means that this part of the path is left out when the path is injected into html.
gulp.task('inject', ['process-lib-css', 'process-app-css', 'process-lib-js', 'process-app-js'], function () {
    return gulp.src(config.index)
        .pipe(inject(gulp.src(config.inject.src, { read: false }), { ignorePath: 'build/'}))
        .pipe(gulp.dest(config.inject.dest));
});


// C O P Y   F O N T S
// Simple copying of the font files into build folder. Note just pipe source and destination, nothing in between.
gulp.task('copy-fonts', function () {
    return gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dest));
});

// C O P Y   T E M P L A T E S
// Simple copying of the angular template files (html) into the build folder.
gulp.task('copy-templates', function () {
    return gulp.src(config.templates.src)
        .pipe(gulp.dest(config.templates.dest));
});

// C O P Y   I M A G E S
// Simple copying of images into the build folder.
gulp.task('copy-images', function () {
    return gulp.src(config.images.src)
        .pipe(gulp.dest(config.images.dest));
});



// T H E   D E F A U L T   T A S K
// You can call the default task just by executing command gulp in the command prompt. 
// Now build is the default task.
gulp.task('default', ['build']);

//TODO:
//Testaa gulp.watchia.
//Tee tehtävä johon liittyy parametri ja ehto. Esim. että build taks päättyy zippaukseen jos zip=1.
