define( [
   'jquery',
   'angular',
   'json!./data/dummy_model.json',
   'json!./data/dummy_layout.json',
   'json!./data/templates.json',
   './render'
], function( $, ng, dummyModel, dummyLayout, templates, render ) {
   'use strict';

   var module = ng.module( 'FfmpegNbe', [ 'nbe' ] );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function FfmpegNbeController( $scope, $timeout, nbeIdGenerator ) {
      $scope.model = dummyModel;
      $scope.layout = dummyLayout;
      $scope.newVideoFilter = null;
      $scope.$watch( 'selection.vertices', function( newSel ) {
         if( newSel ) {
            var keys = Object.keys( newSel );
            if( keys.length ) {
               $scope.currentFilter = $scope.model.vertices[ keys[ 0 ] ];
            }
         }
      }, true );

      var videoIdGenerator = nbeIdGenerator.create( [ 'v' ], $scope.model.vertices );
      $scope.availableFilters = templates.video;

      $scope.addVideoFilter = function( filter ) {
         if ( !filter ) {
            return;
         }
         var id = videoIdGenerator();
         var node = ng.copy( filter );
         $scope.model.vertices[ id ] = node;
         var layout = ng.copy( templates.layout );
         layout.left += Math.round( Math.random() * 60 ) - 30;
         layout.top += Math.round( Math.random() * 60 ) - 30;
         $scope.layout.vertices[ id ] = layout;
      };

      $scope.createExport = function() {
         $scope.export = JSON.stringify( ng.copy( $scope.model ), null, 3 );
      };


      render.setFilterSource( function() {
         return $scope.model;
      } );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   module.controller( 'FfmpegNbeController', [ '$scope', '$timeout', 'nbeIdGenerator', FfmpegNbeController ] );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return module;

} );
