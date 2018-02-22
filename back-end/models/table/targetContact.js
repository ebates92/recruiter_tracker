const Sequelize = require('sequelize'),
sequelize = require('../db'),
Target = require('./target'),
Contact = require('./contact');

const TargetContact = sequelize.define('targetContact',{

});

TargetContact.belongsTo(Target);
TargetContact.belongsTo(Contact);

module.exports = TargetContact;