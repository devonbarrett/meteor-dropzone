if (Meteor.isServer) {
  Meteor.startup(function () {
    UploadServer.init({
      tmpDir: process.env.PWD + '/public/uploads',
      uploadDir: process.env.PWD + '/public/uploads',
      checkCreateDirectories: true,
      uploadUrl: '/upload'
    });
  });
}
