const knex = require("./knex");   // requires relative path not knex


// getEverything()

// return knex table name

module.exports = {

    getEverything() {
        // return knex("log");
        return knex.from("log").innerJoin("activitydata", "log.activity_id", "activitydata.activity_id")
    },

    getLog() {
        return knex.from("log").select("id", "activity_id", "type_of_ride", "activity_type")
    },


    getId(id) {
        return knex.from("log").innerJoin("activitydata", "log.activity_id", "activitydata.activity_id").where("activitydata.activity_id", parseInt(id));

    },

    create(log) {
        console.log("CREATED")
        return knex("log").insert(log, "activity_id", "type_of_ride", "activity_type");

    },

    creater(activity) {
        console.log(activity)
        return knex("activitydata").insert(activity, "activity_id", "time_date", "distance", "total_time");
    },

    deleteId(id) {
        const searchId = id.id;
        return knex("log").where("id", searchId).del();
    },

    newDistance(data) {
        const id = data.id;
        const newDis = data.distance;
        console.log("id is", id)
        console.log("new distance is", newDis)
        return knex("activitydata").where({ activity_id: id }).update({ distance: newDis })
    }

}



