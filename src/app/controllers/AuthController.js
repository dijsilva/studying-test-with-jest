const {User} = require('../models')

class AuthController {
    async login(req, res){
        const {email, password} = req.body

        const user = await User.findOne({where : {email}})

        if (!user){
            return res.status(404).json({error: "User not found."})
        }

        
        if (!(await user.comparePassword(password))){
            return res.status(401).json({error: "Invalid password."})
        }

        const token = user.generateToken()

        return res.status(200).json({user, token})
    }
}

module.exports = new AuthController();