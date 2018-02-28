const Sequelize = require('sequelize');

const sequelize = new Sequelize("recruiterdb", "tylercampbell", "", {
    host: 'localhost',
    dialect:'postgres',
    logging: false,
    operatorsAliases: false
});

module.exports = sequelize;