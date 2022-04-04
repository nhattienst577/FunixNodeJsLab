const path = require("path");

//dirname trả về tên thư mục của 1 đường dẫn
//mainModule đề cập đến module chính đã khởi động ứng dụng ở đây là app.js

module.exports = path.dirname(process.mainModule.filename);
