var mongoose = require("mongoose"),
    Session = require("../models/session.model");

var speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expertises: [String],
    sessionsId: [String],
    imageUrl: String,
    bio: String

});

module.exports = mongoose.model("Speaker", speakerSchema, "Speakers");
