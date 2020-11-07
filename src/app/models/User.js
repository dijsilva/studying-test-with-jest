const { DataTypes, Model } = require('sequelize');

class User extends Model {
    static init (sequelize){
        super.init({
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
              },
            last_name: {
                type: DataTypes.STRING
              },
            password: {
              type: DataTypes.STRING,
              allowNull: false
            },
            email: {
                  type: DataTypes.STRING,
                  allowNull: false
                }
        }, {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'User' // We need to choose the model name
        })
    }
}

module.exports =  User;