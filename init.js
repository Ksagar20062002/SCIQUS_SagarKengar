const mongoose = require('mongoose');
const Student = require('./models/student');
const Admin=require('./models/admin');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Sciqus');
}


main()
    .then(() => {
        console.log("DB is Connected");
    })
    .catch(err => console.log(err));


const sampleStudents = [
    { studentEmail: 'student1@example.com', studentUsername: 'student1', studentPassword: 'password1', studentDOB: new Date('01-01-1995'), studentGender: 'male' },
    { studentEmail: 'student2@example.com', studentUsername: 'student2', studentPassword: 'password2', studentDOB: new Date('02-02-1996'), studentGender: 'female' },
    { studentEmail: 'student3@example.com', studentUsername: 'student3', studentPassword: 'password3', studentDOB: new Date('03-03-1997'), studentGender: 'other' },
    { studentEmail: 'student10@example.com', studentUsername: 'student10', studentPassword: 'password10', studentDOB: new Date('10-10-2000'), studentGender: 'male' }
];

const sampleAdmins = [
    { adminEmail: 'admin1@example.com', adminUsername: 'admin1', adminPassword: 'adminpassword1' },
    { adminEmail: 'admin2@example.com', adminUsername: 'admin2', adminPassword: 'adminpassword2' },
    
  ];
  


async function initializeDatabase() {
    try {
        await Student.insertMany(sampleStudents);
        await Admin.insertMany(sampleAdmins);
        console.log('Database initialized with sample student data.');
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        mongoose.connection.close();
    }
}
initializeDatabase();
