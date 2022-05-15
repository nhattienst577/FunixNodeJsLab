const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://admin:nhattien123@cluster0.ywhvs.mongodb.net/NodeJs-QLBH?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
