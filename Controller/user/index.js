function handleHello(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello world");
}
function handlePing(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Pong");
}

module.exports = {
    handleHello,
    handlePing
};