import http from 'http';
import {dataTransfer} from './data.js'
//   baisc api 
http.createServer(function(req , res ){
  res.writeHead(200 , {'content-type': 'application\json'})
  res.write(JSON.stringify(dataTransfer));
  res.end();
}).listen(8080)

console.log("nodemon working ")