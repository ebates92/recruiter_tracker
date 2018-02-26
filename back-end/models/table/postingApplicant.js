const Sequelize = require('sequelize'),
sequelize = require('../db'),
Posting = require('./posting'),
Applicant = require('./applicant');
User = require('./user')

const PostingApplicant = sequelize.define('postingApplicant',{
    applicantStage: {
        type: Sequelize.STRING, allowNull:true
    },
    isRejected: {
        type: Sequelize.BOOLEAN, allowNull:true
    },
    hiringManager_notes:  {
        type: Sequelize.STRING, allowNull:true
    }
});

PostingApplicant.belongsTo(Posting);
PostingApplicant.belongsTo(Applicant);
PostingApplicant.belongsTo(User);

module.exports = PostingApplicant;