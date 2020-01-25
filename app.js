const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const port = 3000

const app = express();

const bikes = require("./server/api/bikeapi")   // this might not work

app.use(bodyParser.json());

app.use("/api/welcome", bikes)

// app.listen(port, () => console.log(`My blog is listening on port ${port}!`))

app.listen(port, function () {
    console.log(`My server is listening on port ${port}!`)
})


// 404 will be forwarded to error handler

app.use(function (request, response, next) {
    const error = new Error("Page not found.");
    error.status = 404;
    next(error);
})

// Error handler

app.use(function (error, request, response, next) {
    response.status(error.status || 500);
    response.json({
        message: error.message,
        error: request.app.get('env') === 'development' ? error : {}
    });
});



module.exports = app;