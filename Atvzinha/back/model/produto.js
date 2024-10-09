const { DataTypes } = require('sequelize');
const sequelize = require('../bd/bd');

const Product = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

module.exports = Product;