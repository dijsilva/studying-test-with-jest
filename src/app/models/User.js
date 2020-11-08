const bcryptjs = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", 
    {
    first_name: {
      type: DataTypes.STRING,
      },
    last_name: {
      type: DataTypes.STRING
      },
    password: {
      type: DataTypes.VIRTUAL,
      },
    password_hash: {
    type: DataTypes.STRING,
      },
    email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        }
    }, 
    {
    hooks: {
      beforeSave: async (user) => {
        if (user.password){
          user.password_hash = await bcryptjs.hash(user.password, 8)
        }
      }
    }
  }
)

  return User;
}