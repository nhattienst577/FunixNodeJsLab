//1.4 chuyển hướng request, kết nối req và res
const http = require("http");

//req : request, res: response
//tim kiem ham nay va thuc hien moi yeu cau den
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello Node.js server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
