const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
  User.prototype.comparePassword = function(password){
    // use function(password) for use this.password_hash 
    return bcryptjs.compare(password, this.password_hash)
  }

  User.prototype.generateToken = function(){
    return jwt.sign({id: this.id}, secretOrPrivateKey=process.env.SECRET_TOKEN)
  }

  return User;
}