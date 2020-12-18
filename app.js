
var PORT = process.env.PORT || 5000;
var express = require("express");


var server = express();

server.get("/", (req, res, next) => {
    console.log("some one get menue");
    res.send("what do you want? fodd or water")
})

server.get("/water", (req, res, next) => {
    console.log("some one is asking water");
    res.send("This is water")
})

server.get("/food", (req, res, next) => {
    console.log("some one is asking food");
    res.send("This is food")
})

server.listen(PORT, () => {
    console.log("server is running on port" + PORT);
})