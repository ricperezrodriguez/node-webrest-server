import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log(req.url);

  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<p>Hola Mundo</p>");
  //   res.end();

  //   const data = { name: "John Doe", age: 30, city: "New York" };
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(data));

  if (req.url === "/") {
    const htmlFile = fs.readFileSync("./public/index.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlFile);
  } else if (req.url === "/css/styles.css") {
    const cssFile = fs.readFileSync("./public/css/styles.css", "utf-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(cssFile);
  } else if (req.url === "/js/app.js") {
    const jsFile = fs.readFileSync("./public/js/app.js", "utf-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(jsFile);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
