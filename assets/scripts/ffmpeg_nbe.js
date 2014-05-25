define( [
   'angular',
   'nbe',
   './upload',
   './ffmpeg_nbe_controller'
], function start( ng ) {
   'use strict';

   ng.bootstrap( document, ['FfmpegNbe'] );

} );
