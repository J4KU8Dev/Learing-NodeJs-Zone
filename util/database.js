const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db; 
const uri =
  "###"
;

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then(client => {
      console.log("Connected!");
      _db = client.db('shop');
      callback();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
