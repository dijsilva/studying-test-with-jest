const request =  require('supertest')
const app = require('../../src/app/server')

const truncate = require('../utils/truncate')


const {User} = require('../../src/app/models')

describe("Register",  () => {

    beforeEach( async () => {
        await truncate()
    })
    it('should return 400 status code when some required field is not informed on sign up', async () => {

        const response_name = await request(app).post('/user').send({
                                    last_name: 'Jose da Silva',
                                    password: '123456', 
                                    email: 'diegojsilvabr@gmail.com'
                                })
        
        const response_email = await request(app).post('/user').send({
            first_name: 'Diego',
            last_name: 'Jose da Silva',
            password: '123456', 
        })

        const response_password = await request(app).post('/user').send({
            first_name: 'Diego',
            last_name: 'Jose da Silva',
            email: 'diegojsilvabr@gmail.com'
        })
        
        expect(response_name.status).toBe(400)
        expect(response_email.status).toBe(400)
        expect(response_password.status).toBe(400)
    })

    it('should return 201 status code when user is created', async () => {
        const reponse = await request(app).post('/user').send({
            first_name:"Diego", 
            last_name: "Jose da Silva",
            password: "123456",
            email: "diegojsilvabr@gmail.com"
        })

        expect(reponse.status).toBe(201)
    })
})