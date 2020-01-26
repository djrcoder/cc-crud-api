const express = require("express");
const router = express.Router();
const queries = require("../database/queries")  // use knex queries file


router.get("/", (request, response) => {
    queries.getEverything().then(log => {
        response.json(log);

    });
});

router.get("/log", (request, response) => {
    queries.getLog().then(log => {
        response.json(log);
    });
});

router.get("/:id", (request, response, next) => {
    queries.getId(request.params.id).then(log => {
        if (log) {
            response.json(log);

        } else {
            response.status(404);
            next(new Error("Data not found."))
        }
    });
});

router.post("/new", (request, response, next) => {
    queries.create(request.body).then(log => {
        if (log) {

            response.json(log[0]);

        } else {
            response.status(404);
            next(new Error("Data not found."))
        }
    });
});

router.post("/newact", (request, response, next) => {
    queries.creater(request.body).then(log => {
        if (log) {

            response.json(log[0]);

        } else {
            response.status(404);
            next(new Error("Data not found."))
        }
    });
});

router.delete("/del", (request, response, next) => {
    queries.deleteId(request.body).then(log => {
        if (log) {
            response.json(log[0]);
        } else {
            response.status(404);
            next(new Error("Data not found."))
        }
    });
});

router.post("/update", (request, response, next) => {
    queries.newDistance(request.body).then(log => {
        console.log("Gets here")
        if (log) {

            response.json(log[0]);
        } else {
            response.status(404);
            next(new Error("Data not found."))
        }
    });
});

module.exports = router;

