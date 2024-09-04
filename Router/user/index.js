const routerMethods = require("../methods.js")
const routes = require("../routes.js") 
const { userController } = require("../../Controller/index.js");

const userRouter = {
    run(request, response) {
        routerMethods.get(request, response, routes.user.hello, userController.handleHello);
        routerMethods.get(request, response, routes.user.ping, userController.handlePing);
    }
}

module.exports = userRouter;