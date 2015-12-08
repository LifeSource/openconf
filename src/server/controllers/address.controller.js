module.exports = function() {

    var Address = require("../models/address.model");

    var addressController = {
        use: use,
        query: query,
        get: get,
        post: post,
        put: put,
        patch: patch,
        remove: remove
    };

    return addressController;

    function use(req, res, next) {
        
    }

    function query(req, res) {

    }

    function get(req, res) {

    }

    function post(req, res) {

    }

    function put(req, res) {

    }

    function patch(req, res) {

    }

    function remove(req, res) {

    }
};

