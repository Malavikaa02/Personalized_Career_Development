const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./connect');
const { saveUser } = require('./controllers/userController');
const { processSkillsPrompt, getSkillsByCareer } = require('./controllers/skillsController');  // Import skills controller
const { processProjectPrompt, getProjectsByCareer } = require('./controllers/projectsController');  // Import project controller

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.post('/saveUser', saveUser);  

app.post('/api/skills', processSkillsPrompt);  
app.get('/api/skills/:careerId', getSkillsByCareer);  

app.post('/api/projects/process', processProjectPrompt); 
app.get('/api/projects/:careerId', getProjectsByCareer);  

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
