var http = require('http');
http.createServer(function(req, res) {
    res.write('Brasil 3x0 Servia \n');
    res.end('Bom dia!');

}).listen(3000);