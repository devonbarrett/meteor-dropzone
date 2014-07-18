UI.registerHelper('dropzone',function(){
  return Template['_dropzone'];
});
Template._dropzone.rendered = function(){
  window.Dropzone.discover();
}
