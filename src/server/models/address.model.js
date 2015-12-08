var mongoose = require("mongoose");

var addressSchema = new mongoose.Schema({

    streetNo: {
        type: Number,
        required: true,
        min: 0
    },
    streetName: {
        type: String,
        required: true
    },
    streetType: String,
    suburb: {
        type: String,
        required: true
    },
    postCode: Number,
    city: String,
    country: String

});

module.exports = mongoose.model("Address", addressSchema, "Addresses");
