/**
* 
* create server and run hello world
*
*/

const http = require('http');
let serverCounter = 0;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    // res.end('Hello World')
    res.end('Visitor number ' + (++serverCounter));
})

server.listen(8000);
