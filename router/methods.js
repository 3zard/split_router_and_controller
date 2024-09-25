const routerMethods = {
    get: function(request, response, path, callbackFunction) {
        const {method, url} = request
        if (path === url && method === "GET") {
            callbackFunction(request, response);
        }
    }
}

module.exports = routerMethods