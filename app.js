const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //cho phep req duoc den middleware tiep theo
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello NodeJS</h1>");
});

const server = http.createServer(app);

server.listen(3000);
