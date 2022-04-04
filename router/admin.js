const express = require("express");

//Router như là ứng dụng express nhỏ gắn với ứng dụng express khác
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><Button type="submit">Add Product</Button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
