const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  studentUsername: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  studentPassword: {
    type: String,
    required: true
  },
  studentDOB: {
    type: Date,
    required: true
  },
  studentGender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other']
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
