import { createServer } from "http";
import { readFile } from "fs";
import { parse } from "url";
import { parse as _parse } from "querystring";

const server = createServer((req, res) => {
    const page = parse(req.url).pathname;
    const params = _parse(parse(req.url).query);

    if (page === "/") {
        readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    } else if (page === "/css/style.css") {
        readFile("css/style.css", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(data);
            res.end();
        });
    } else if (page === "/js/main.js") {
        readFile("js/main.js", (err, data) => {
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
            if (params["bandmember"] === "panda bear") {
                res.writeHead(200, { "Content-Type": "application/json" });
                const objToJson = {
                    bandMemberName: "Noah Lennox",
                    bandMemberStageName: "Panda Bear",
                    albumWhenJoined: "Spirit They're Gone...",
                };
                res.end(JSON.stringify(objToJson));
            }
            if (params["bandmember"] === "geologist") {
                res.writeHead(200, { "Content-Type": "application/json" });
                const objToJson = {
                    bandMemberName: "Brian Weitz",
                    bandMemberStageName: "Geologist",
                    albumWhenJoined: "Danse Manatee",
                };
                res.end(JSON.stringify(objToJson));
            }
            if (params["bandmember"] === "deakin") {
                res.writeHead(200, { "Content-Type": "application/json" });
                const objToJson = {
                    bandMemberName: "Josh Dibb",
                    bandMemberStageName: "Deakin",
                    albumWhenJoined: "Campfire Songs",
                };
                res.end(JSON.stringify(objToJson));
            }
        }
    }
});

const PORT = process.env.PORT || 3000;
server.listen(3000, () => console.log(`server running on port ${PORT}`));
