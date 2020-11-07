const User = require('../../src/app/models/User')


describe("Authentication",  () => {
    it('should return 200 status code when user is created', async () => {
        const user = await User.create(first_name= "Diego", 
        last_name= "Jose da Silva", 
        password= "12345", 
        email= "diegojsilvabr@gmail.com")

        // console.log(user)

        // expect(user.email).toBe("diegojsilvabr@gmail.com")
    })
})