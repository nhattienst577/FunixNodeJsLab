const path = require("path");
const express = require("express");
const bodyParser = require("body-parser"); // duoc sd de xu ly from nhap vao
const app = express();
const adminRoutes = require("./router/admin");
const shopRouters = require("./router/shop");

//Thiet lap templating engine by EJS
app.set("view engine", "ejs");
//Thiet lap noi tim thay bo cuc thu muc views
app.set("views", "views");

//là một đối tượng body chứa dữ liệu mà đã được parsed sẽ được đưa vào request (có thể hiểu là req.body).
//Dữ liệu đó là một cặp key-value, trong đó value có thể là array hoặc string nếu extended: false và các loại còn lại nếu extended: true.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRouters);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  console.log(req.url);
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    path: req.url,
    activeShop: false,
    activeAddProduct: false,
    productCSS: false,
    formCSS: false,
  });
});

app.listen(3000);
