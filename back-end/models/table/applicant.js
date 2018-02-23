const Sequelize = require('sequelize'),
sequelize = require('../db'),
User = require('./user');

const Applicant = sequelize.define('applicant', {

    firstName: {
        type: Sequelize.STRING, allowNull:false,
    },
    lastName: {
        type: Sequelize.STRING, allowNull:false,
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
    linked_in: {
        type: Sequelize.STRING,
        allowNull: true
    },
    resume_link: {
        type: Sequelize.STRING,
        allowNull: true
    },
    recruiter_notes: {
        type: Sequelize.STRING,
        allowNull: true
    },

});

Applicant.belongsTo(User);


module.exports = Applicant;