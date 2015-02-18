#!/usr/bin/env node

var staticServer = require('node-static');
var exec = require('child_process').exec
var sys = require('sys');

var dir = '.';
var port = 8080;
var file = new staticServer.Server(dir);

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(port);

console.log('serving "%s" at http://127.0.0.1:%d', dir, port);


exec('mocha-casperjs', [], function(err, stdout, stderr) {
  sys.puts(stdout);

  var code = err ? 1 : 0;

  process.exit(code);
});
