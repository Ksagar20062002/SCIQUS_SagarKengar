const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  adminUsername: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  adminPassword: {
    type: String,
    required: true
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
