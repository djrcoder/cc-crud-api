const expect = require("chai").expect
const knex = require("../server/database/knex")
const app = require("../app")
const request = require("supertest")

// app.use("/api/welcome", bikes)

describe("CRUD API Server", () => {

    it("Displays all information in object", (done) => {
        request(app)
            .get("/api")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('array');
                console.log(response.body[0].activity_id);
                done();
            });
    });

    it("Has the correct entry", (done) => {
        request(app)
            .get("/api")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body[0].activity_id).to.equal('3027');
                done();
            });
    });

    it("Is the correct length", (done) => {
        request(app)
            .get("/api")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.length).to.equal(9);
                console.log(response.body.length);
                done();
            });
    });

    it("Returns one object for a correct activity id search", (done) => {
        request(app)
            .get("/api/3028")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.length).to.equal(1);
                console.log(response.body);
                done();
            });
    });
});
