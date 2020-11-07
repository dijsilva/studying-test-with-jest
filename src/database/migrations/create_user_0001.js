module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        first_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
        last_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
    }
  };