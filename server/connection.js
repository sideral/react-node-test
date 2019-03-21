const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'scalable-path';

module.exports.connect = function(done){
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    if(err) return done(err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    done(null, db);
  });
};
