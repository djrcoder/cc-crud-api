exports.up = function (knex, Promise) {
    // create the 'users' table with three columns
    return knex.schema.createTable("bikes", (t) => {
        t.increments() // auto-incrementing id column
            .primary()
            .index(); // index this column

        t.string("bike_name", 25) // maximum length of 15 characters
            .unique() // add a unique constraint to this column
            .notNullable() // add a not-null constraint to this column
            .index(); // index it

        t.timestamp("created_at")
            .notNullable()
            .defaultTo(knex.fn.now()); // default to the current time
    });
};

exports.down = function (knex, Promise) {
    // undo this migration by destroying the 'users' table
    return knex.schema.dropTable("bikes");
};