const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete-crud', 'root', 'Neebal@123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;