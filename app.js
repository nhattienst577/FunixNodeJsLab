const express = require("express");
const bodyParser = require("body-parser"); // duoc sd de xu ly from nhap vao

const app = express();

const adminRouters = require("./router/admin");
const shopRouters = require("./router/shop");

//là một đối tượng body chứa dữ liệu mà đã được parsed sẽ được đưa vào request (có thể hiểu là req.body).
//Dữ liệu đó là một cặp key-value, trong đó value có thể là array hoặc string nếu extended: false và các loại còn lại nếu extended: true.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouters);

app.use(shopRouters);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
