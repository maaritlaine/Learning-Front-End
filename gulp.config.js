// GULP is a javascript task runner used for code analysis, testing, handling references and for the build tasks.
// npm install gulp --save-dev

// You can code your own plug-ins for different tasks, but its easier and quicker to use those available on the Internet.
// npm install gulp-plugin --save-dev
// You can check all the gulp plug-ins installed in a project in the package.js file 
// or execute this command in the project directory:
// npm list --depth=0

// There are two files in this project related to gulp tasks.
// Gulpfile.js includes all the pipelined tasks.
// Gulp.config.js contains all the configurations in json format. 
// Gulp tasks are coded in Node.js.

module.exports = function () {

    var config = {


        // CLEAN
        // Path to the folder to be cleaned
        clean: './build',



        // CODE ANALYSIS
        // Paths to *.js files for code analysis. Vet is for vetting out the code.
        // JS-files in the root directory + files recursively in the client directory are being checked.
        vet: [
            './*.js',
            './client/**/*.js'
        ],

        // JS PROCESSING. 
        // 3rd party files separate from own js files. 
        js: {
            src: {
                lib: [
                './bower_components/angular/angular.js',
                './bower_components/angular-route/angular-route.js',
                './bower_components/angular-translate/angular-translate.js'
                ],
                app: [
                './client/app/*.js', // MRH: Miks vaan module? Olikse vaan ohimenevä tilanne. Muutin tän.
                './client/app/**/*.js'
                ]
            },
            concat: {
                lib: 'lib.js',
                app: 'app.js'
            },
            dest: './build/js'
        },


        // CSS PROCESSING
        // 3rd party files separate from own css files. 
        css: {
            src: {
                lib: [
                 './bower_components/bootstrap/dist/css/bootstrap.css',
                 './bower_components/fontawesome/css/font-awesome.css',
                 './client/content/grayscale.css'
                ],
                app: [
                 './client/content/app.scss'
                ]
            },
            concat: {
                lib: 'lib.css',
                app: 'app.css'
            },
            dest: './build/css'
        },

        // HTML INJECTIONS
        // Source files are the js and css files that are the result of js and css processing
        // that needs to be done before they are injected into html.
        // Note the asterix. That is because the files are hashtagged for versioning by GULP-REV plugin.
        inject: {
            src: [
                './build/css/lib*.css',
                './build/css/app*.css',
                './build/js/lib*.js',
                './build/js/app*.js' 
            ],
            dest: './build'
        },

        // Location of the index.html where then injections are made, i.e. the application page.
        index:  './client/index.html',

        // FONTS
        fonts: {
            src: [
                './bower_components/bootstrap/dist/fonts/**/*.*',
                './bower_components/fontawesome/fonts/**/*.*'
            ],
            dest: './build/fonts'
        },

        // TEMPLATES = Angularjs templates = pieces of html used in the SPA (Single Page Application).
        templates: {
            src: './client/app/**/*.html',
            dest: './build/templates'
        },

        // IMAGES = location of images used in UI.
        images: {
        src: './client/content/**/*.jpg',
        dest: './build/images'
        }

   }

   return config;

};


