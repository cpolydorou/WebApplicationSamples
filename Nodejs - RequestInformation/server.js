'use strict';

// Add required modules
var http = require('http');
var os = require('os');
const { isNullOrUndefined } = require('util');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    // Update the responce headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Get the IP of the client
    var ip = req.socket.remoteAddress.toString();

    // Get the X-Forwarded-For header value
    var xff = req.headers['x-forwarded-for'] ||
        null;

    // Get the requested host
    var hh = req.headers.host || 'null';

    // Get the user agent
    var agent = req.headers['user-agent'];

    // Get the hostname of the server
    var hostname = os.hostname();

    // Get the platform of the server
    var platform = os.platform();

    // Create the response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is a test page designed to provide troubleshooting information related to incoming client requests.\n\n');
    res.write('Client IP: ' + ip + '\n');
    res.write('Client IP (X-Forwarded-For): ' + xff + '\n');
    res.write('User Agent: ' + agent + '\n');
    res.write('Method: ' + req.method + '\n');
    res.write('HTTP Version: ' + req.httpVersion + '\n');
    res.write('Requested Host: ' + hh + '\n');
    res.write('Server: ' + hostname + '\n');
    res.write('Server Platform: ' + platform + '\n');

    // Add the raw headers to the response
    res.write('Headers:\n');
    for (const [key, value] of Object.entries(req.headers)) {
        res.write('\t' + key + ': ' + value + '\n');
    }

    // Finalize the response
    res.end('');
}).listen(port);
