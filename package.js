Package.describe({
  name: 'dbarrett:dropzonejs',
  summary: 'Dropzone.js - an open source library that provides drag\'n\'drop file uploads with image previews',
  version: '4.0.1',
  git: 'https://github.com/devonbarrett/meteor-dropzone.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'templating',
    'underscore'
  ], 'client');

  //add dropzone library 
  api.addFiles([
  	'lib/4.0.1/dropzone.js',
  	'lib/4.0.1/css/basic.css',
  	'lib/4.0.1/css/dropzone.css',
  ], 'client');

  //add dropzone template 
  api.addFiles([
  	'lib/dbarrett:dropzonejs.html', 
  	'lib/dbarrett:dropzonejs.js'
  ], 'client');
});