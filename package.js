Package.describe({
  name: 'dbarrett:dropzonejs',
  summary: 'Dropzone.js - an open source library that provides drag\'n\'drop file uploads with image previews',
  version: '3.10.2',
  git: 'https://github.com/devonbarrett/meteor-dropzone.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'templating',
    'underscore'
  ], 'client');

  api.addFiles([
  	'3.10.2/dropzone.js',
  	'3.10.2/images/spritemap.png',
  	'3.10.2/images/spritemap@2x.png',
  	'3.10.2/css/basic.css',
  	'3.10.2/css/dropzone.css',
  ], 'client');
  
  api.addFiles([
  	'dbarrett:dropzonejs.html', 
  	'dbarrett:dropzonejs.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dbarrett:dropzonejs');
  api.addFiles('dbarrett:dropzonejs-tests.js');
});
