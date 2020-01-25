const express = require("express");
const router = express.Router();
const queries = require("../database/queries")  // use knex queries file

router.get("/", (request, response) => {
    queries.getEverything().then(log => {
        response.json({
            log
        });
    });


});

module.exports = router;

