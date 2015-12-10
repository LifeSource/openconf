var mongoose = require("mongoose"),
    Address = require("../models/address.model"),
    Speaker = require("../models/speaker.model");

var sessionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    time: String,
    sessionDate:{ type: Date, default: new Date() },
    duration: Number,
    slots: { type: Number, min: 0, max: 30 },
    speakers: [Speaker.schema]
});

module.exports = mongoose.model("Session", sessionSchema, "Sessions");
