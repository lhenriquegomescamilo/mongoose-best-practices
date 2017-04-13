var http = require('http'),
    db = require('./config/db'),
    pages = require('./pages'),
    app = require("./config/express");

http.createServer(app).listen(3001, function(){
  console.log("THE SERVER IS RUNNING ON PORT ", this.address().port);
});