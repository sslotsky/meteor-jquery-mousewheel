Package.describe({
  summary: "jquery-mousewheel - a jQuery extension for cross browser mousewheel support"
});

Package.on_use(function(api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.mousewheel.js'
  ], 'client');
});
