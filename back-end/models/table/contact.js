const Sequelize = require('sequelize'),
sequelize = require('../db'),
User = require('./user');

const Contact = sequelize.define('contact', {

    name: {
        type: Sequelize.STRING, allowNull:false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {isEmail:{args:true, msg:`please enter a valid email address`}}
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: true
    }

});

Contact.belongsTo(User);


module.exports = Contact;