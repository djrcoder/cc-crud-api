const bikeData = require("../bikes");

// Array of bikes


exports.seed = function (knex) {
  // Deletes all existing entries
  return knex('bikes').del()
    .then(function () {
      // Inserts seed entries from server/bikes.js
      return knex('bikes').insert(bikeData) // insert bike data into table name 'bikes'
    });
};
