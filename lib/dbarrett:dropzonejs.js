Template.dropzone.onRendered( function () {
  var options = _.extend( {}, Meteor.Dropzone.options, this.data );
  if ( this.data.id ) {
    this.dropzone = new Dropzone( '#' + this.data.id + '.dropzone', options );
  } else {
    $( this.firstNode ).dropzone( options );
  }
} );

Meteor.Dropzone = {
  options: {

  }
};
