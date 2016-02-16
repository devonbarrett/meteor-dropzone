Template.dropzone.onRendered( function () {
  var options = _.extend( {}, Meteor.Dropzone.options, this.data );
  if ( this.data.id ) {
    this.dropzone = new Dropzone( '#' + this.data.id + '.dropzone', options );
  } else {
    this.$('.dropzone').dropzone( options );
  }
} );

Meteor.startup(function() {
  Dropzone.autoDiscover = false;
  Meteor.Dropzone = {
    options: {

    }
  }
});
