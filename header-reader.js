const http = require('http');
const port = 3333;

const requestHandler = (request, response) => {
    console.log('==============');

    console.log(request.method, request.url)

    for (let i = 0; i < request.rawHeaders.length / 2; i++)
        console.log(request.rawHeaders[i * 2] + ":", request.rawHeaders[i * 2 + 1]);

    let body = '';

    request.on('data', (chunk) => {
        body += chunk;
    });
    request.on('end', () => {
        console.log('\n', body);
        response.end('Done!')
    });
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})