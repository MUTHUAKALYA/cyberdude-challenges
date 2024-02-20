const http = require("http");
const internsData = require("./data/internsDetails.json")

const PORT = 3000;

http.createServer(function(request,response){
    console.log("Server is running on " + PORT)
    response.write(JSON.stringify(internsData))
    response.end()
}).listen(PORT)