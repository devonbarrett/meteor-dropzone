Package.describe({
  summary: "Dropzone.js - an open source library that provides drag'n'drop file uploads with image previews"
});

Package.on_use(function (api) {
  api.export('Dropzone');
  api.use(['templating', 'handlebars'], 'client');
  api.add_files([
    'client/dropzone.html',
    'client/dropzoneHelper.js',
    'lib/dropzone.js',
    'public/images/spritemap.png',
    'public/images/spritemap@2x.png',
    'public/css/basic.css',
    'public/css/dropzone.css'
  	], 'client'
  );
});
