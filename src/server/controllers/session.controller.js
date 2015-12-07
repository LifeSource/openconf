module.exports = function() {

    var Session = require("../models/session");

    var sessionController = {
        use: use,
        query: query,
        get: get,
        post: post,
        put: put,
        patch: patch,
        remove: remove
    };

    return sessionController;

    function use(req, res, next) {
       Session.findById(req.params.id,  function (err, session) { 
           (err) ? res.status(500).send(err) : res.json(session);
       });
    }

    function query(req, res) {

        Session.find()
            .exec(function (err, sessions) {
                (err) ? res.status(500).send(err) : res.json(sessions);
            });
    }

    function get(req, res) {
        res.json(req.session);
    }

    function post(req, res) {
        var session = new Session(req.body);

        session.save(function (err, session) {
            (err) ? res.status(500).send(err) : res.status(201).send(sesson);
        });
    }

    function put(req, res) {

        req.session = new Session(req.body);

        req.session.save(function (err, session) {
            (err) ? res.status(500).send(err) : res.json(session);
        });
    }

    function patch(req, res) {
        if (req.session._id) {
            delete req.session._id;
        }

        for (var prop in req.body) {
            req.session[prop] = req.body[prop];
        }
        
        req.session.save(function (err, session) {
            (err) ? res.status(500).send(err) : res.json(session);
        });
    }

    function remove(req, res) {
        req.session.remove(function (err) {
            (err) ? res.status(500).send(err) : res.status(204).send("Session deleted!");
        });
    }
};

