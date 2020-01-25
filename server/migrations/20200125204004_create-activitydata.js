exports.up = function (knex, Promise) {
    // create the 'users' table with three columns
    return knex.schema.createTable("activitydata", (t) => {

        t.bigInteger("activity_id", 25) // maximum length of 15 characters
            .primary()
            .notNullable() // add a not-null constraint to this column
            .index(); // index it

        t.datetime("time_date")
            .notNullable()

        t.bigInteger("distance", 25)
            .notNullable()

        t.bigInteger("total_time")
            .notNullable()
    });
};

exports.down = function (knex, Promise) {
    // undo this migration by destroying the 'users' table
    return knex.schema.dropTable("activitydata");
};