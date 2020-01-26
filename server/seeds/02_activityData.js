const activityData = require("../activityData");

// Array of activity data


exports.seed = function (knex) {
  // Deletes all existing entries
  return knex('activitydata').del()
    .then(function () {
      // Inserts seed entries 
      return knex('activitydata').insert(activityData) // insert  data into table name 'activitydata'
    });
};