const User = require('../models/User')

module.exports = {
    index(req, res){
        res.json({"message": "todos os usuarios"})
    },
    // store(){    
    // }
    show(req, res){
        const user = {"id": 1, "name": "Diego José da Silva", "email": "diegojsilvabr@gmail.com"}

        return res.json(user)
    },
    // async create(req, res){
    //     const data = {first_name : 'Diego',  last_name : 'Jose da Silva', email:'diegojsilvabr@gmail.com'};

    //     const user = await User.create(data);

    //     return res.status(200).send("deu bom");
    // }
    // update(){    
    // }
    // delete(){    
    // }
}