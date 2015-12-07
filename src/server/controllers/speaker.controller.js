module.exports = function() {

    var Speaker = require("../models/speaker");

    var speakerController = {
        use: use,
        query: query,
        get: get,
        post: post,
        put: put,
        patch: patch,
        remove: remove
    };

    return speakerController;

    function use(req, res, next) {

       Speaker.findById(req.params.id,  function (err, speaker) {
           
           if (err) {
               res.status(500).send(err);
           } else if (speaker) {
               req.speaker = speaker;
               next();
           } else {
               res.status(404).send("Speaker not found!");
           }
       });
    }

    function query(req, res) {
        Speaker
            .find()
            .exec(function (err, speakers) {
                (err) ? res.status(500).send(err) : res.json(speakers);
            });
    }

    function get(req, res) {
        res.json(req.speaker);
    }

    function post(req, res) {

        var speaker = new Speaker(req.body);

        speaker.save(function (err, speaker) {
            (err) ? res.status(500).send(err) : res.status(201).send(speaker);
        });
    }

    function put(req, res) {

        req.speaker = new Speaker(req.body);

        req.speaker.save(function (err, speaker) {
            (err) ? res.status(500).send(err) : res.json(speaker);
        });
    }

    function patch(req, res) {

        if (req.speaker._id) {
            delete req.speaker._id;
        }

        for (var prop in req.body) {
            req.speaker[prop] = req.body[prop];
        }

        req.speaker.save(function (err, speaker) {
            (err) ? res.status(500).send(err) : res.json(speaker);
        });
    }

    function remove(req, res) {
        req.speaker.remove(function (err) {
            (err) ? res.status(500).send(err) : res.status(204).send("Speaker deleted!");
        });
    }
};

