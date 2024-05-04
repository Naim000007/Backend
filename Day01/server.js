const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<h1>Hello world</h1>`)
        res.statusCode = 200
        res.end()
    }
    else {
        res.write(`<h1>server not found</h1>`)
        res.statusCode = 200
        res.end()
    }
})
server.listen(8000, () => {
    console.log(`server is running on port 8000`);
})