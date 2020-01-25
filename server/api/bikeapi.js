const express = require("express");
const router = express.Router();
const queries = require("../database/queries")  // use knex queries file

router.get("/", (request, response) => {
    queries.getEverything().then(bikes => {
        response.json({
            bikes
        })
    })

    // response.json({
    //     message: "Hello!"
    // });
});

module.exports = router;



// response.json({
//     message: "Hello!"
// });