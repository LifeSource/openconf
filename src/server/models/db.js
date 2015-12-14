var mongoose = require('mongoose');
var gracefulShutdown;

var connectionString = 'mongodb://localhost/openconf',
    dbConnection = mongoose.connect(connectionString);

dbConnection.connection.on('connected', function() {
    console.log('Mongoose connected to ' + connectionString);

    seedDatabase();
});

dbConnection.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

dbConnection.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});
gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});

function seedDatabase() {

    var database = mongoose.connection;
    var seedData = require("./seedData")();

    var Speaker = require("./speaker.model"),
        Session = require("./session.model");

    Speaker.find()
        .exec(function(err, speakers) {
            if (speakers.length === 0) {
                console.log("Seeding speakers data into database ...");
                database.collection("Speakers").insert(seedData.speakers);
            }
        });

    Session.find()
        .exec(function(err, sessions) {
            if (sessions.length === 0) {
                console.log("Seeding sessions data into database ...");
                database.collection("Sessions").insert(seedData.sessions);
            }
        });
}
