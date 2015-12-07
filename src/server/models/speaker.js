var mongoose = require("mongoose"),
    Session = require("../models/session");

var speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expertises: [String],
    sessionsId: [String],
    imageUrl: String
});

module.exports = mongoose.model("Speaker", speakerSchema, "Speakers");
