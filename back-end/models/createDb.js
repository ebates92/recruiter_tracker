const User = require('./table/user'),
Target = require('./table/Target'),
Contact = require('./table/contact'),
TargetContact = require('./table/TargetContact');

User.sync({force:true})
.then(() => {
    Target.sync({force:true}).then(()=>{
        Contact.sync({force:true}).then(()=>{
            TargetContact.sync({force:true}).then(()=>{
                process.exit();
            })
        })
    })
  }
);