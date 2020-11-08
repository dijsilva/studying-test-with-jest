require('dotenv').config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
})

const express = require('express');
const routes = require( './routes');

class Server {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
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

