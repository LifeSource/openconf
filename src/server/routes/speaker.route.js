var express = require("express"),
    speakerRouter = express.Router(),
    speakerController = require("../controllers/speaker.controller")();

speakerRouter.use("/:id", speakerController.use);

speakerRouter.route("/")
    .get(speakerController.query)
    .post(speakerController.post);

speakerRouter.route("/:id")
    .get(speakerController.get)
    .put(speakerController.put)
    .patch(speakerController.patch)
    .delete(speakerController.remove);

module.exports = speakerRouter;
