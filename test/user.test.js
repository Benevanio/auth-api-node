const app = require("../server.js");
const supertest = require("supertest");
const request = supertest(app)

describe('Create User', () => {
    test('It should respond with a 201 status code', async () => {
        let emailGenerated = Math.random().toString(36).substring(7) + "@gmail.com";
        let response = await request.post('/api/users').send({
            name: "John Doe",
            email: emailGenerated,
            password: "password"
        });
        expect(response.statusCode).toBe(201);
        
    });
        
})