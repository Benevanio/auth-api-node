const app = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(app)

describe('Create User', () => {
    test('It should respond with a 201 status code', async () => {
        let emailGenerated = Math.random().toString(36).substring(7) + "@gmail.com";
        let generatedName = Math.random().toString(36).substring(7);
        let generatedPassword = Math.random().toString(36).substring(7);
        let response = await request.post('/api/users').send({
            name: generatedName,
            email: emailGenerated,
            password: generatedPassword
        });
        expect(response.statusCode).toBe(201);
        
    });
    test('It should respond with a 400 status code', async () => {
        const user= {name: "", email :"", password : ""};
       return request.post('/api/users').send(user).then(response => {
            expect(response.statusCode).toBe(400);
        }).catch((err) => {
            console.log(err.statusCode(500));
        });
    });
        
})