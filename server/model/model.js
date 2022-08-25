const Sequelize  = require('sequelize');

const sequelize = require('../database/connection');

var User = new sequelize.define('user',{
    name : {
        type : Sequelize.STRING,
        required: true
    },
    email : {
        type: Sequelize.STRING,
        required: true,
        unique: true
    },
    gender : Sequelize.STRING,
    status : Sequelize.STRING
})

module.exports = User;