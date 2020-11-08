const { User } = require('../../src/app/models')

const truncate = require('../utils/truncate')
const bcryptjs = require('bcryptjs')

describe("User Password Hash", () => {
    beforeEach(async () => {
        await truncate()
    })
    it("should make hash of user password", async () => {
        const user = await User.create({
            first_name: "Diego",
            last_name: "José da Silva",
            email: "diegojsilvabr@gmail.com",
            password: "123456",
        })
        const compareHash = await bcryptjs.compare("123456", user.password_hash)
        expect(compareHash).toBe(true)
    })
})