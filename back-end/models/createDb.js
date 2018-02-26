require('dotenv').config();
const User = require('./table/user'),
Posting = require('./table/Posting'),
Applicant = require('./table/applicant'),
PostingApplicant = require('./table/PostingApplicant');

User.sync({force:true})
.then(() => {
    Posting.sync({force:true}).then(()=>{
        Applicant.sync({force:true}).then(()=>{
            PostingApplicant.sync({force:true}).then(()=>{
                process.exit();
            })
        })
    })
  }
);