const http = require("http");

//req : request, res: response
//tim kiem ham nay va thuc hien moi yeu cau den
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello Node.js server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
