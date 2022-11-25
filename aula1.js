var http = require('http');
http.createServer(function(req, res) {
    res.write('Brasil 2x0 Servia')
    res.end('Bom dia!');

}).listen(3000);