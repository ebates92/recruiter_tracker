const Sequelize = require('sequelize'),
sequelize = require('../db'),
Posting = require('./posting'),
Applicant = require('./applicant');

const PostingApplicant = sequelize.define('postingApplicant',{
    applicantStage: {
        type: Sequelize.STRING, allowNull:true
    },
    isRejected: {
        type: Sequelize.BOOLEAN, allowNull:true
    },
});

PostingApplicant.belongsTo(Posting);
PostingApplicant.belongsTo(Applicant);

module.exports = PostingApplicant;