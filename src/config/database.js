// this is necessary for sequelize-cli
require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

module.exports = {
    development: {
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_STORAGE,
        logging: false,
          define: {
            timestamps: true,
            underscored: true,
          },
    },
    test: {
      dialect: process.env.DB_DIALECT,
      storage: process.env.DB_STORAGE,
      logging: false,
        define: {
          timestamps: true,
          underscored: true,
        },
    }
  }