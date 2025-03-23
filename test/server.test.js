const app = require("../server.js");
const supertest = require("supertest");
const request = supertest(app)

test("The application should return a 200 status code", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
});