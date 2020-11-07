// this is necessary for sequelize-cli
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
    development: {
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_STORAGE,
          define: {
            timestamps: true,
            underscored: true,
          },
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mysql"
    }
  }