const userRouter = require("./user")

const router = {
    run: function(request, response) {
        userRouter.run(request, response);
    }
}

module.exports = router