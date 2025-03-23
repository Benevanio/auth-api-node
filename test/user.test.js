const app = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(app);

let testUser = {
    name: Math.random().toString(36).substring(7),
    email: Math.random().toString(36).substring(7) + "@gmail.com",
    password: Math.random().toString(36).substring(7)
};

beforeAll(async () => {
    const response = await request.post('/api/users').send(testUser);
    expect(response.statusCode).toBe(201);
});

afterAll(async () => {
    await request.delete('/api/users');
});

describe('Create User', () => {
    test('It should respond with a 400 status code (empty user)', async () => {
        const user = { name: "", email: "", password: "" };
        const response = await request.post('/api/users').send(user);
        expect(response.statusCode).toBe(400);
    });
});

describe("retorn jwt", () => {
    test('It should respond with a 200 status code (auth success)', async () => {
        const response = await request.post('/api/users/auth').send(testUser);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
    });

    test('It should respond with a 400 status code (wrong password)', async () => {
        const invalidUser = {
            email: testUser.email,
            password: "wrong_password"
        };
        const response = await request.post('/api/users/auth').send(invalidUser);
        expect(response.statusCode).toBe(400);
    });
});
