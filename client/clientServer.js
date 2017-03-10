var express = require('express')
,   app = express()
,   server = require('http').createServer(app)
,   conf = require('./config.json');

// Webserver
// auf den Port x schalten
server.listen(conf.portClient);

app.configure(function(){
	// statische Dateien ausliefern
	app.use(express.static(__dirname + '/public'));
});

// wenn der Pfad / aufgerufen wird
app.get('/', function (req, res) {
	// so wird die Datei index.html ausgegeben
	res.sendfile(__dirname + '/public/index.html');
});

// Portnummer in die Konsole schreiben
console.log('Client running on http://127.0.0.1:' + conf.portClient + '/');
