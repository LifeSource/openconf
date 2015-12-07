var express = require("express"),
    addressRouter = express.Router(),
    addressController = require("../controllers/address.controller")();

addressRouter.use("/:id", addressController.use);

addressRouter.route("/")
    .get(addressController.query)
    .post(addressController.post);

addressRouter.route("/:id")
    .get(addressController.get)
    .put(addressController.put)
    .patch(addressController.patch)
    .delete(addressController.remove);

module.exports = addressRouter;

