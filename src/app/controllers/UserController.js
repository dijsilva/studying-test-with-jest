const {User} = require('../models')

class UserController {
    async index(req, res){
        const users = await User.findAll()
        return res.status(200).json(users)
    }
    show(req, res){
        const user = {"id": 1, "name": "Diego José da Silva", "email": "diegojsilvabr@gmail.com"}
        return res.json(user)
    }
    async create (req, res){
        const {first_name, last_name, email, password} = req.body
        if (first_name == null || email==null || password == null){
            return res.status(400).json({erro: "you shold to inform all fields required (first_name, password and email)."})
        }
        const data = { first_name, last_name, email, password }
        const user = await User.create(data)
        if (user){
            return res.status(201).json(user)
        } else {
            return res.status(500).json(user)
        }
    }
}

module.exports = new UserController;