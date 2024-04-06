var fs = require("fs");

function show(response) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "image/png","refresh": 5});
  fs.createReadStream("temp/test.png").pipe(response);
}

exports.show = show;