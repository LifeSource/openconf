var mongoose = require("mongoose"),
    Address = require("../models/address"),
    Speaker = require("../models/speaker");

var sessionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: Address.schema,
    duration: Number,
    slots: {
        type: Number,
        min: 0,
        max: 30
    },
    speakersId: [String]
});

module.exports = mongoose.model("Session", sessionSchema, "Sessions");
