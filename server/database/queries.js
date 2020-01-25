const knex = require("./knex");   // requires relative path not knex


// getEverything()

// return knex table name

module.exports = {
    getEverything() {
        return knex("bikes")
    }
}
