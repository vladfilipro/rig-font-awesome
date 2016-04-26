/**
 * Description of font-awesome task
 *
 * uses the following parameters:
 *     config.fontsDest { String | Array }
 *     config.scssDest { String | Array }
 *     config.lessDest { String | Array }
 *     config.cssDest { String | Array }
 */

'use strict';

var gulp = require( 'gulp' );
var path = require( 'path' );

var faDir = './../node_modules/font-awesome';

try {
    faDir = path.resolve( faDir );
} catch ( e ) {
    console.log( 'Cannot find font-awesome module. Make sure the project you are running does not already include font-awesome' );
    throw e;
}

module.exports = function outputTaskFunc( name, config ) {
    gulp.task( name, config.dependency, function () {
        if ( config.fontsDest ) {
            gulp.src( faDir + '/fonts/*' )
                .pipe( gulp.dest( config.fontsDest ) );
        }
        if ( config.scssDest ) {
            gulp.src( faDir + '/scss/*' )
                .pipe( gulp.dest( config.scssDest ) );
        }
        if ( config.lessDest ) {
            gulp.src( faDir + '/less/*' )
                .pipe( gulp.dest( config.lessDest ) );
        }
        if ( config.cssDest ) {
            gulp.src( faDir + '/css/*' )
                .pipe( gulp.dest( config.cssDest ) );
        }
    } );
};
