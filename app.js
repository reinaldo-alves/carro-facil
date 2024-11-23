const http = require('http');
const Utilitario = require('./models/utilitario');

const requestListener = (req, res) => {
    const { method, url } = req;
    if(method === 'POST' && url === '/carro/construir') {
        let body = new Utilitario('ABC123', 1993, 'bege', 'Fusca', '60 mil', '115', 'Muito bom', 4, '10L', '15km/L');
        req.on('data', chunk => {
            body = chunk.toString();
        })
        req.on('end', () => {
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(JSON.stringify(body));
        })
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const ip = '127.0.0.1'

server.listen(port, ip, () => {
    console.log(`Servidor executando na porta ${port}`);
})