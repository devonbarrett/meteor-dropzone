Handlebars.registerHelper('dropzone',function(url, options){
  return new Handlebars.SafeString(Template.dropzone({action: url}))
});
Template.dropzone.rendered = function(){
  window.Dropzone.discover();
}
