const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);

    if (page === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    } else if (page === "/css/style.css") {
        fs.readFile("css/style.css", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(data);
            res.end();
        });
    } else if (page === "/js/main.js") {
        fs.readFile("js/main.js", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.write(data);
            res.end();
        });
    } else if (page === "/api") {
        if ("bandmember" in params) {
            if (params["bandmember"] === "avey tare") {
                res.writeHead(200, { "Content-Type": "application/json" });
                const objToJson = {
                    bandMemberName: "David Portner",
                    bandMemberStageName: "Avey Tare",
                    albumWhenJoined: "Spirit They're Gone...",
                };
                res.end(JSON.stringify(objToJson));
            }
        }
    }
});

server.listen(8000);
