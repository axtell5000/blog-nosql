const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect("mongodb://localhost:27017"); // this just connects to the mongo server
  database = client.db("blog"); // this one to an actual database
}

function getDb() {
  if (!database) {
    throw { message: "Database connection not established" };
  }
  return database;
}

// exposong to rest of App
module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};
