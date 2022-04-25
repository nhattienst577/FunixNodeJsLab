const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // lấy id của sp ta muốn thêm vào
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // tìm kiếm xem đã có sp đó chưa
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id //kiểm tra id sp có khớp với id của sp vừa mới thêm vào không
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // thêm sp hoặc tăng số lượng
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        //ghi đè chỉ mục sp hiện có và thay thế phần tử updateProduct, nên là nó được thay thế hoặc được thêm vào giỏ hàng và giá được cập nhật
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      //ghi sp mới vừa add vào giỏ hàng
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      console.log("this : ", updatedCart);
      const product = updatedCart.products.find((prod) => prod.id === id);
      console.log("this is : ", product);
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};
