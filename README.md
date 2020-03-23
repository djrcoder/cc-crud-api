# This was created during my time as a student at Code Chrysalis.

### CRUD API service. 

This is an example of a CRUD (Create, Read, Update & Delete) API that is seeded with a weeks worth of activity data. It requires a postgresql server to be running locally.

To begin, enter 
`yarn`
in the terminal to install your dependecies.

Ensure that you have a postgres server running locally. If you need to configure it, change the connection path in server/knexfile.js.

Next, run
`knex migrate:latest`

Then you can seed the database by running the command:

`knex seed:run`

Finally, you should be able to start the server by running the command:

`yarn start`

Copy the relative path from index.html to begin querying data.

Available endpoints are:

http://localhost:3000/api/log      GET  ----> To show the table 'log'


http://localhost:3000/api/id       GET  ----> To get a row by searching for id


http://localhost:3000/api/         GET  ----> To show all data on two inner joined tables


http://localhost:3000/api/new      POST ----> To run sample data creating a new activity

http://localhost:3000/api/newact


http://localhost:3000/api/del     DELETE ---> To delete a record by ID


http://localhost:3000/api/update  PATCH  ---> To update a distance by activity ID.
 
