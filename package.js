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

  //add dropzone library 
  api.addFiles([
  	'lib/3.10.2/dropzone.js',
  	'lib/3.10.2/images/spritemap.png',
  	'lib/3.10.2/images/spritemap@2x.png',
  	'lib/3.10.2/css/basic.css',
  	'lib/3.10.2/css/dropzone.css',
  ], 'client');

  //add dropzone template 
  api.addFiles([
  	'lib/dbarrett:dropzonejs.html', 
  	'lib/dbarrett:dropzonejs.js'
  ], 'client');
});