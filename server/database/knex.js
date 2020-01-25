const envirnoment = 'development';
// const envirnoment = process.env.NODE_ENV || + 'development';
// Dev will use development connection, else production connection.

const config = require("../knexfile");

const envirnomentConfig = config[envirnoment];

const knex = require("knex");

// All the above information will connect to the database

const connection = knex(envirnomentConfig);

module.exports = connection;



