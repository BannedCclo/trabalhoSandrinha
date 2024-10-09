const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud', 'root', '1234', {
  host: 'localhost',
  dialect: 'sqlite'
});

module.exports = sequelize;