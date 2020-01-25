const activityData = require("../activityData");

// Array of activity data


exports.seed = function (knex) {
  // Deletes all existing entries
  return knex('activitydata').del()
    .then(function () {
      // Inserts seed entries from server/bikes.js
      return knex('activitydata').insert(activityData) // insert bike data into table name 'bikes'
    });
};