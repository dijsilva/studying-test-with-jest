const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/User');

const connection = new Sequelize(dbConfig.development);

testConnection = async (connection) => {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConnection(connection)

User.init(connection);

// User.associate(connection.models);

module.exports = connection;