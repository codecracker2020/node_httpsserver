var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();

var options = {
  key: fs.readFileSync('C:/Users/212748723/Desktop/nodeapps/node_https/cert/key.pem'),
  cert: fs.readFileSync('C:/Users/212748723/Desktop/nodeapps/node_https/cert/public.pem')
};
var app = function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }
  
  https.createServer(options, app).listen(3433);
