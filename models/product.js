const db = require("../util/database");

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  //thao tác xóa
  static deleteById(id) {}

  //thao tác tìm nạp
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  //tìm theo id
  static findById(id, cb) {}
};
