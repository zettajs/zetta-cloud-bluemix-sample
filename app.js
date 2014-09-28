var zetta = require('zetta');

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3000);

zetta()
  .name('zetta-bluemix')
  .listen(port, host);
