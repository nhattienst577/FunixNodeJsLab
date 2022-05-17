const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, imageUrl, price, description, id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this._id = new mongodb.ObjectId(id);
  }

  save() {
    let db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db.collection("products").updateOne(
        { _id: this._id },
        {
          $set: {
            title: this.title,
            imageUrl: this.imageUrl,
            price: this.price,
            description: this.description,
          },
        }
      );
    } else {
      dbOp = db.collection("products").insertOne(this);
    }
    return dbOp
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //tim nap tat ca sp
  static fetchAll() {
    const db = getDb(); //cap quyen truy cap vao csdl
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
