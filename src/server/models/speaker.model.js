var mongoose = require("mongoose");

var speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expertises: [String],
    imageUrl: String,
    bio: String
});

module.exports = mongoose.model("Speaker", speakerSchema, "Speakers");
