const path = require("path");
const express = require("express");
const bodyParser = require("body-parser"); // duoc sd de xu ly from nhap vao
const errorController = require("./controllers/error");
const db = require("./util/database");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRouters = require("./routes/shop");

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

app.use(errorController.get404);

app.listen(3000);
