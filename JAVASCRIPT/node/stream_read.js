// legge dallo stream il data passato da curl con l'opzione -d
const http= require('http');
const server = http.createServer((req, res) => {
    console.log(req.headers);
    // curl -d  "some data" => req.on(data)
    req.on('data', (chunk) => {
        console.log(chunk) // internal buffer
    })
    return res.end();
})
console.log('starting');
server.listen(4000)