'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
    }

  };

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notNull: false
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: false
        }
      },
      login: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: false
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notNull: false
        }
      },
      admin: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'tb_user'
    }
  );
  return User;
};