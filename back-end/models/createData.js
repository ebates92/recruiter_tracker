const User = require('./table/user'),
Target = require('./table/Target'),
Contact = require('./table/contact'),
TargetContact = require('./table/TargetContact');

User.create({
    firstName: 'Tyler',
    lastName: 'Test',
    email: 'test@test.com',
    password: 'test123'
}).then((user) => {
    return Target.create({
                userId: user.dataValues.id,
                name: "Dickensen plc",
                annualRevenue: "50M",
                dealLead: "Chris Campbell",
                stage: "Prospecting",
                location: "Kentucky",
                industry: "",
                objectType: "Target",
                employees: 0,
            })
            .then(() =>
                Target.create({
                    userId: user.dataValues.id,
                    name: "GenePoint",
                    annualRevenue: "50M",
                    dealLead: "Lynn Smith",
                    stage: "Researching",
                    location: "Kentucky",
                    industry: "",
                    objectType: "Target",
                    employees: 0,
                })
            )
            .then(() =>
                Target.create({
                    userId: user.dataValues.id,
                    name: "Pyramid Construction Inc",
                    annualRevenue: "50M",
                    dealLead: "Kate Ryan",
                    stage: "Pending Approval",
                    location: "Kentucky",
                    industry: "",
                    objectType: "Target",
                    employees: 0,
                })
            )
            .then(() => 
                Target.create({
                    userId: user.dataValues.id,
                    name: "Edge",
                    annualRevenue: "50M",
                    dealLead: "James Smith",
                    stage: "Approved",
                    location: "Kentucky",
                    industry: "",
                    objectType: "Target",
                    employees: 0,
                })
            )
}).then(() => process.exit());