const path = require("path");
const express = require("express");
const bodyParser = require("body-parser"); // duoc sd de xu ly from nhap vao

// routes
const adminRoutes = require("./routes/admin");
const shopRouters = require("./routes/shop");

//mongoose
const mongoose = require("mongoose");

// user model
const User = require("./models/user");

// controllers
const errorController = require("./controllers/error");

// database
//const mongoConnect = require("./util/database").mongoConnect;

//create app
const app = express();

//Thiet lap templating engine by EJS
app.set("view engine", "ejs");
//Thiet lap noi tim thay bo cuc thu muc views
app.set("views", "views");

//là một đối tượng body chứa dữ liệu mà đã được parsed sẽ được đưa vào request (có thể hiểu là req.body).
//Dữ liệu đó là một cặp key-value, trong đó value có thể là array hoặc string nếu extended: false và các loại còn lại nếu extended: true.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Store user in request
app.use((req, res, next) => {
  User.findById("6283b66b895fd24579c1f3f1")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRouters);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://admin:nhattien123@cluster0.ywhvs.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((results) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
