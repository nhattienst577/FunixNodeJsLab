const http = require("http");

//req : request, res: response
//tim kiem ham nay va thuc hien moi yeu cau den
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
