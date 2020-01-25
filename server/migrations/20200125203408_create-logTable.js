exports.up = function (knex, Promise) {
    // create the 'users' table with three columns
    return knex.schema.createTable("log", (t) => {
        t.increments() // auto-incrementing id column
            .primary()
            .index(); // index this column

        t.bigInteger("activity_id", 25) // maximum length of 15 characters
            .unique() // add a unique constraint to this column
            .notNullable() // add a not-null constraint to this column
            .index(); // index it

        t.string("type_of_ride", 25)
            .notNullable()
            .defaultTo(knex.fn.now()); // default to the current time

        t.string("activity_type", 25)
            .notNullable()
            .defaultTo(knex.fn.now()); // default to the current time
    });
};

exports.down = function (knex, Promise) {
    // undo this migration by destroying the 'users' table
    return knex.schema.dropTable("log");
};