const http = require("http");

const PORT = 3000;

http.createServer(function(request,response){
    console.log("Server is running on " + PORT)
    response.write("hello I'm learning Node Js")
    response.end()
}).listen(PORT)