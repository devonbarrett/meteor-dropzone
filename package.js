Package.describe( {
  name: 'dbarrett:dropzonejs',
  summary: 'Dropzone.js - an open source library that provides drag\'n\'drop file uploads with image previews',
  version: '4.2.0',
  git: 'https://github.com/devonbarrett/meteor-dropzone.git'
} );

Npm.depends({
  dropzone: '4.2.0'
});

Package.onUse( function ( api ) {
  api.versionsFrom( '1.0' );

  api.use( [
    'templating',
    'underscore'
  ], 'client' );

  //add dropzone library
  api.addFiles( [
    '.npm/package/node_modules/dropzone/dist/dropzone.js',
    '.npm/package/node_modules/dropzone/dist/basic.css',
    '.npm/package/node_modules/dropzone/dist/dropzone.css'
  ], 'client' );

  //add dropzone template
  api.addFiles( [
    'lib/dropzonejs.html',
    'lib/dropzonejs.js'
  ], 'client' );
} );

Package.onTest( function ( api ) {
  api.use( [ 'dbarrett:dropzonejs', 'tinytest' ] );

  api.addFiles( [
    'tests/spec.js'
  ], 'client' );
} );
