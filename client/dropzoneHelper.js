Handlebars.registerHelper('dropzone',function(url, options){
    return "<form action='" + url + "' class='dropzone'><div class='fallback'><input name='file' type='file' multiple /></div></form>";
});