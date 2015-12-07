var express = require("express"),
    sessionRouter = express.Router(),
    sessionController = require("../controllers/session.controller")();

sessionRouter.route("/")
    .get(sessionController.query)
    .post(sessionController.post);

sessionRouter.use("/:id", sessionController.use);

sessionRouter.route("/:id")
    .get(sessionController.get)
    .put(sessionController.put)
    .patch(sessionController.patch)
    .delete(sessionController.remove);

module.exports = sessionRouter;
