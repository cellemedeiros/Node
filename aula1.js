var http = require('http');
var dia = required('./biblioteca');
http.createServer(function(req, res) {
    res.write('Hello World!');
    res.writeHead(200, {
        'Content - Type': 'text/html'
    });
    res.write('Brasil 2x0 Suiça')
    res.write(Date().substring(16, 24) + '>br>');
    res.write('<p style-color:green>' + Date().substring(16, 24) + '>br>');
    res.write(dia.diaDaSemana() + '</p><br>')
    res.end('Bom dia!')
}).listen(3000);