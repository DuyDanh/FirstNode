const myData = require("./myData.js");
const Polygon = require("./Polygon.js");
const _ = require("underscore");
const http = require("http");
console.log("Hello World");
const helloFunction = () =>{
    console.log("Hello Function");
}
helloFunction();
myData.getMessage();

const polygon = new Polygon(10,20);
console.dir(polygon.width);

const myArray = [1,2,3,4,5];
const found = _.contains(myArray, 5);
console.log(found);

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    if(request.url === "/favicon.ico"){
        console.log("favicon request")
    }
    // on json header write the type of content
    // providing a static code
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('request received');

    response.write(myData.getMessage());
    response.end();
};

http.createServer(onRequest).listen(port);