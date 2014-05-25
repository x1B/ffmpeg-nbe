require.config( {
   baseUrl: '/static/',
   shim: {
      underscore: { exports: '_' },
      dagre: { exports: 'dagre' },
      angular: { exports: 'angular' }
   },
   packages: [
      {
         name: 'nbe',
         location: 'bower_components/nbe/js',
         main: 'nbe'
      },
      {
         name: 'ffmpeg_nbe',
         location: 'scripts',
         main: 'ffmpeg_nbe'
      }
   ],
   paths: {
      'dropzone': 'bower_components/dropzone/downloads/dropzone',
      'jquery': 'bower_components/jquery/dist/jquery',
      'jquery_ui': 'bower_components/jquery_ui',
      'underscore': 'bower_components/underscore/underscore',
      'angular': 'bower_components/angular/angular',
      'dagre': 'bower_components/dagre/index',
      'text': 'bower_components/requirejs-plugins/lib/text',
      'json': 'bower_components/requirejs-plugins/src/json'
   }
} );
