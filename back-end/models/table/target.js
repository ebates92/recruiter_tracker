const Sequelize = require('sequelize'),
sequelize = require('../db'),
User = require('./user');

const Target = sequelize.define('target',{

    name: {
        type: Sequelize.STRING, allowNull:false,
        validate:{notEmpty:true}
    },
    annualRevenue: {
        type: Sequelize.STRING, allowNull:true
    },
    dealLead: {
        type: Sequelize.STRING,allowNull:true
    },
    stage:{
        type: Sequelize.STRING, allowNull: true
    },
    location:{
        type: Sequelize.STRING, allowNull: true
    },
    employees:{
        type: Sequelize.INTEGER, allowNull: true
    },
    industry:{
        type: Sequelize.STRING, allowNull: true
    },
    objectType:{
        type: Sequelize.STRING, allowNull: true
    }
});

Target.belongsTo(User);


module.exports = Target;