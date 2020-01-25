
// const knex = require("../server/database/knex")
// const app = require("../app")
// const bodyParser = require("body-parser");

// const chai = require("chai");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);
// chai.should();
// chai.expect();
// const pokeData = require("../src/data");

// const { setupServer } = require("../src/server");
// const server = setupServer();
/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
// const bikes = require("../server/api/bikeapi")

const expect = require("chai").expect
const knex = require("../server/database/knex")
const app = require("../app")
const request = require("supertest")

// app.use("/api/welcome", bikes)

describe("CRUD API Server", () => {

    it("Displays all information", (done) => {
        request(app)
            .get("/api/welcome")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object');
                console.log(response.body);
                done();
            });
    });

    it("Has the correct entry", (done) => {
        request(app)
            .get("/api/welcome")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.bikes[0].bike_name).to.equal("Steel Bike");
                console.log(response.body.bikes[0]);
                done();
            });
    });
});
