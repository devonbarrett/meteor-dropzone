Handlebars.registerHelper('dropzone',function(url, options){
  return new Handlebars.SafeString(Template._dropzone({action: url}))
});
Template._dropzone.rendered = function(){
  window.Dropzone.discover();
}
