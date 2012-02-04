var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    console.log("Recibiendo solicitud");
    
	var path = url.parse(request.url).pathname;
	
	ruta(path);
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola a todos desde @codejobs\n\n");
    response.end();
  }

  
}

exports.start = start;

function ruta(pathname) {
	console.log("Solicitando desde la ruta " + pathname);
}

