const http = require('http');
const Utilitario = require('./models/utilitario');

var fusca = new Utilitario('ABC123', 1993, 'bege', 'Fusca', '60 mil', '115', 'Muito bom', 4, '10L', '15km/L');






const requestListener = (req, res) => {
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Olá mundo');
}

const server = http.createServer(requestListener);

const port = 5000;

server.listen(port, () => {
    console.info(`Servidor está rodando na porta ${port}`)
    console.log(fusca);
})