const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    
    firstName: {
        type: Sequelize.STRING, allowNull:false,
        validate:{
            notEmpty:{args:true,msg:`I know you have a first name, give it to me`}
        }
    },
    lastName: {
        type: Sequelize.STRING
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {args:true, msg:`user already exist`},
        validate: {isEmail:{args:true, msg:`please enter a valid email address`}}
    },

    password: {
        type:Sequelize.STRING,
        allowNull:true
    }
    
  });


    
module.exports = User;