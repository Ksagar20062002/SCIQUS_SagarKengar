const express = require("express");
const mongoose = require('mongoose');
const figlet = require("figlet");
const path = require("path");
var methodOverride = require('method-override');

const Student = require('./models/student');
const Admin = require('./models/admin');


const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log("Hi, I am Sager's Server and I Started Listening");
});

figlet("Hello Sciqus!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

main()
    .then(() => {
        console.log("DB is Connected");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Sciqus');
}

app.get('/Sciqus', (req, res) => {
    res.render("welcome");
});

app.get('/Register', (req, res) => {
    res.render("Ragister");
});

async function checkStudentCredentials(username, password) {
    const studentRecord = await Student.find({ studentEmail: username, studentPassword: password });
    return studentRecord.length > 0;
}

async function checkAdminCredentials(username, password) {
    const adminRecord = await Admin.find({ adminEmail: username, adminPassword: password });
    return adminRecord.length > 0;
}

app.post('/Sciqus', async (req, res) => {
    const { loginUsername1, loginPassword1 } = req.body;
    const isStudent = await checkStudentCredentials(loginUsername1, loginPassword1);
    const isAdmin = await checkAdminCredentials(loginUsername1, loginPassword1);

    if (isStudent) {
        const Perti_student = await Student.findOne({ studentEmail: loginUsername1 });
        console.log(Perti_student);
        res.render('student', { Perti_student });
    } else if (isAdmin) {
        const Perti_Admin = await Admin.findOne({ adminEmail: loginUsername1 });
        const studentarr = await Student.find({});
        // console.log(Perti_Admin);
        res.render('admin', { Perti_Admin, studentarr });
    } else {
        console.log(3);
        res.render('ErrorLogin');
    }
});


app.get('/student/:id/:idA/update', async (req, res) => {
    let { id, idA } = req.params;
    const Editstu = await Student.findOne({ _id: id });
    res.render("Editstudent", { Editstu, idA });
});

app.patch('/student/:id/:idA/update', async (req, res) => {
    const { id, idA } = req.params;
    const {
        studentEmail1,
        studentUsername1,
        studentPassword1,
        studentDOB1,
        studentGender1 } = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, {
            studentEmail: studentEmail1,
            studentUsername: studentUsername1,
            studentPassword: studentPassword1,
            studentDOB: studentDOB1,
            studentGender: studentGender1
        }, { new: true });

        const Perti_Admin = await Admin.findOne({ _id: idA });
        const studentarr = await Student.find({});
        res.render('admin', { Perti_Admin, studentarr });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/student/:id/:idA/delete', async (req, res) => {
    let { id, idA } = req.params;
    await Student.deleteOne({ _id: id });
    const Perti_Admin = await Admin.findOne({ _id: idA });
    const studentarr = await Student.find({});
    res.render('admin', { Perti_Admin, studentarr });
});

app.get('/student/add/:idA', async (req, res) => {
    let { idA } = req.params;
    let thisAdmin = await Admin.findOne({ _id: idA })
    res.render('Add_student', { thisAdmin });


});

app.post('/student/add/:idA', async (req, res) => {
    let { idA } = req.params;
    const {
        studentEmail1,
        studentUsername1,
        studentPassword1,
        studentDOB1,
        studentGender1 } = req.body;
    try {
        const newStudent = await Student.insertMany([{
            studentEmail: studentEmail1,
            studentUsername: studentUsername1,
            studentPassword: studentPassword1,
            studentDOB: studentDOB1,
            studentGender: studentGender1
        }]);

        const Perti_Admin = await Admin.findOne({ _id: idA });
        const studentarr = await Student.find({});
        res.render('admin', { Perti_Admin, studentarr });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }


});
