const http = require('http')
const url = require('url')
const totalSuma = require('./suma')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) =>{
    const pathUrl = url.parse(req.url, true)
    res.statusCode = 200
    res.setHeader('content-Type', 'text/plain;charset=utf-8')
    res.write(`suma ${totalSuma.suma(pathUrl.query.num1,pathUrl.query.num2)} `)
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})
