const logData = require("../logData");

// Array of logs


exports.seed = function (knex) {
  // Deletes all existing entries
  return knex('log').del()
    .then(function () {
      // Inserts seed entries from server/log
      return knex('log').insert(logData) // insert bike data into table name log
    });
};
