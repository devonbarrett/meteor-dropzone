Package.describe({
  summary: "Dropzone.js - an open source library that provides drag'n'drop file uploads with image previews"
});

Package.on_use(function (api) {
  api.use('handlebars', 'client');
  api.add_files([
    'client/dropzoneHelper.js',
    'lib/dropzone.js',
    'public/images/spritemap.png',
    'public/images/spritemap@2x.png',
    'public/css/basic.css',
    'public/css/dropzone.css'
  	], 'client'
  );
});
