const request = require('supertest')
const app = require('../../src/app/server')

const AuthController = require('../../src/app/controllers/AuthController')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('Authentication', () => {

    beforeEach(async () => {
        await truncate();
    })

    it('should rerturn a status 404 if not exists a user with informed e-mail', async () => {
        const user_data = {
            first_name: "Diego", 
            last_name: "Jose da Silva", 
            email: "qualquer@qualquer.com", 
            password: "qualquer"
        }
        const user = await User.create(user_data);
        const wrong_login = {email: "qualquer2@qualquer.com", password: "qualquer"}
        const response = await request(app).post('/session').send(wrong_login);
        expect(response.status).toBe(404);
    })
    
    it('should rerturn a status 401 if some field is wrong', async () => {
        const user_data = {
            first_name: "Diego", 
            last_name: "Jose da Silva", 
            email: "qualquer@qualquer.com", 
            password: "qualquer"
        }
        const user = await User.create(user_data);
        const wrong_login = {email: "qualquer@qualquer.com", password: "qualquer1"}
        const response = await request(app).post('/session').send(wrong_login);
        expect(response.status).toBe(401);
    })


    it('should rerturn a token when valid email and password are informed', async () => {
        const user_data = {
            first_name: "Diego", 
            last_name: "Jose da Silva", 
            email: "qualquer@qualquer.com", 
            password: "qualquer"
        }
        const user = await User.create(user_data);
        const response = await request(app).post('/session').send({email: user_data.email, password: user_data.password});
        expect(response.body).toHaveProperty("token")
        expect(response.status).toBe(200);
    })
})