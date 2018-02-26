require('dotenv').config();

const User = require('./table/user'),
Posting = require('./table/Posting'),
Applicant = require('./table/applicant'),
PostingApplicant = require('./table/PostingApplicant');


User.create({
    firstName: 'Tyler',
    lastName: 'Test',
    email: 'test@test.com',
    password: 'test123'
}).then((user) => {
    return Posting.create({
                userId: user.dataValues.id,
                name: "Microsoft",
                positionTitle: 'Front-end Developer',
                jobDescription: 'Working with clients to execute on application UI/UX',
                salaryRange: 90000,
                qualifications: "College Degree, 1-2 years experience with JavaScript",
                hiringManager: "Bill Gates",
                additionalNotes: "3 rounds of interviews",
                isFilled: false
            })
            .then(() =>
                Posting.create({
                    userId: user.dataValues.id,
                    name: "SpaceX",
                    positionTitle: 'Rocket Scientist',
                    jobDescription: 'Build rockets that dont explode',
                    salaryRange: 300000,
                    qualifications: "PhD Degree, 80% success rate with rockets not exploding",
                    hiringManager: "Elon Musk",
                    additionalNotes: "3 rounds of interviews",
                    isFilled: false
                })
            )
            .then(() =>
                Posting.create({
                    userId: user.dataValues.id,
                    name: "The Weinstien Company",
                    positionTitle: 'CEO',
                    jobDescription: 'Be a decent person',
                    salaryRange: 1000000,
                    qualifications: "Film industry experience. Zero felony charges.",
                    hiringManager: "Not Harvey Weinstien",
                    additionalNotes: "3 rounds of interviews",
                    isFilled: false
                })
            )
            .then(() => 
                Applicant.create({
                    userId: user.dataValues.id,
                    firstName: 'Evan',
                    lastName: 'Bates',
                    email: 'ebates92@gmail.com',
                    phone: '2016155957',
                    linked_in: 'www.linkedin.com/in/evanbates92/',
                    resume_link: './resumes/evanbates.pdf',
                    recruiter_notes: 'hardworking, knowledgable, and eager to learn',
                })
            )
            .then(() => 
                Applicant.create({
                    userId: user.dataValues.id,
                    firstName: 'Seth',
                    lastName: 'Rogen',
                    email: 'sethrogan@gmail.com',
                    phone: '9706669999',
                    linked_in: 'www.linkedin.com/in/sethrogan/',
                    resume_link: './resumes/sethrogan.pdf',
                    recruiter_notes: 'Pretty funny. Super Bad was good - watch that.',
                })
            )
            .then(() => 
                Applicant.create({
                    userId: user.dataValues.id,
                    firstName: 'Albert',
                    lastName: 'Einstein',
                    email: 'aeinstein@gmail.com',
                    phone: '000000000',
                    linked_in: 'www.linkedin.com/in/alberteinstien/',
                    resume_link: './resumes/aeinstein.pdf',
                    recruiter_notes: 'mc^2',
                })
            )
            .then(() => 
                PostingApplicant.create({
                    postingId: 1,
                    applicantId: 1,
                    userId: user.dataValues.id,
                    applicantStage: 'Screening',
                    isRejected: false,
                    hiringManager_notes: 'Hire them!'
                })
            )
            .then(() => 
                PostingApplicant.create({
                    postingId: 2,
                    applicantId: 2,
                    userId: user.dataValues.id,
                    applicantStage: 'Verification',
                    isRejected: false,
                    hiringManager_notes: 'Hire them!'
                })
            )
            .then(() => 
                PostingApplicant.create({
                    postingId: 3,
                    applicantId: 3,
                    userId: user.dataValues.id,
                    applicantStage: 'Initial Interview',
                    isRejected: false,
                    hiringManager_notes: 'Hire them!'
                })
            )
}).then(() => process.exit());