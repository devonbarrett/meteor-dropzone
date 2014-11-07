Template.dropzone.rendered = function() {
  var options = _.extend({}, Meteor.Dropzone.options, this.data);
  //if no id set use random string
  this.id = this.data && this.data.id ? this.data.id : new Mongo.ObjectID()._str;

  this.dropzone = new Dropzone('#' + this.id + '.dropzone', options);
};

Meteor.Dropzone = {
    options: {
        
    }
};