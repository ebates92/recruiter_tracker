const Sequelize = require('sequelize'),
sequelize = require('../db'),
Posting = require('./posting'),
Applicant = require('./applicant');

const PostingApplicant = sequelize.define('postingApplicant',{

});

PostingApplicant.belongsTo(Posting);
PostingApplicant.belongsTo(Applicant);

module.exports = PostingApplicant;