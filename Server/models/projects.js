const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  careerId: {
    type: String,
    required: true,
    unique: true,  
  },
  projects: {
    type: Map,
    of: String,
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
