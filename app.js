var http = require('http');
var port = process.env.PORT ||3000;

http.createServer(function(req,res){
    res.writeHead(200,{'Content - Type':'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end('Hello world!');
}).listen(port);