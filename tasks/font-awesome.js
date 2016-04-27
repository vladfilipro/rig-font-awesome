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
var fs = require( 'fs' );

var possibleDirectories = [
    './node_modules/font-awesome',
    __dirname + '/../node_modules/font-awesome'
];

var faDir;
var stats;
for ( var i = 0; i < possibleDirectories.length; i++ ) {
    faDir = possibleDirectories[ i ];
    try {
        faDir = path.resolve( faDir );
        stats = fs.lstatSync( faDir );
        if ( stats.isDirectory() ) {
            break;
        }
    } catch ( e ) {}
}

module.exports = function fontawesomeTaskFunc( name, config ) {
    gulp.task( name, config.dependency, function () {
        var stream = require( 'merge-stream' )();
        if ( config.fontsDest ) {
            stream.add( gulp.src( faDir + '/fonts/*' )
                .pipe( gulp.dest( config.fontsDest ) ) );
        }
        if ( config.scssDest ) {
            stream.add( gulp.src( faDir + '/scss/*' )
                .pipe( gulp.dest( config.scssDest ) ) );
        }
        if ( config.lessDest ) {
            stream.add( gulp.src( faDir + '/less/*' )
                .pipe( gulp.dest( config.lessDest ) ) );
        }
        if ( config.cssDest ) {
            stream.add( gulp.src( faDir + '/css/*' )
                .pipe( gulp.dest( config.cssDest ) ) );
        }
        return ( stream.isEmpty() ) ? null : stream;
    } );
};
