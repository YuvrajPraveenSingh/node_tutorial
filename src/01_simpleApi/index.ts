import http from "http";
import { dataTransfer } from "./data.js";

http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "applicationjson" });
    res.write(JSON.stringify(dataTransfer));
    res.end();
  }).listen(8080);

console.log("nodemon working ");
