module.exports = function (app) {
    
    var speakerRouter = require("./speaker.route"),
        sessionRouter = require("./session.route"),
        addressRouter = require("./address.route");

    app.use("/api/speakers", speakerRouter);
    app.use("/api/sessions", sessionRouter);
    app.use("/api/addresses", addressRouter);

};
