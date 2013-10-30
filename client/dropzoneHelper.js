Handlebars.registerHelper('dropzone',function(url, id, options){
  return new Handlebars.SafeString(Template._dropzone({action: url, _id: id}))
});
Template._dropzone.rendered = function(){
  window.Dropzone.discover();
}
