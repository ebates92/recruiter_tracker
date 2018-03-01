const Sequelize = require('sequelize'),
sequelize = require('../db'),
User = require('./user');

const Posting = sequelize.define('posting',{

    positionTitle: {
        type: Sequelize.STRING, allowNull:false,
        validate:{notEmpty:true}
    },
    jobDescription: {
        type: Sequelize.STRING, allowNull:true
    },
    salaryRange: {
        type: Sequelize.INTEGER,allowNull:true
    },
    qualifications:{
        type: Sequelize.STRING, allowNull: true
    },
    hiringManager:{
        type: Sequelize.STRING, allowNull: true
    },
    additionalNotes:{
        type: Sequelize.TEXT, allowNull: true
    },
    isFilled:{
        type: Sequelize.BOOLEAN, allowNull: true
    },

});

Posting.belongsTo(User);


module.exports = Posting;