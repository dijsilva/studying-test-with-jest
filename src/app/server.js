require('dotenv').config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
})

console.log(process.env.NODE_ENV, 'puts')

const express = require('express');
const routes = require( './routes');

class Server {
    constructor() {
        this.express = express();

        this.database();
        this.middleware();
        this.routes();
    }

    database(){
        require('../database')
    }

    middleware(){
        // this.express.use(express.urlencoded({extended: false}))
        this.express.use(express.json())

    }

    routes(){
        this.express.use(routes)
    }
}


module.exports = new Server().express;

