const Project = require('../models/projects');
const Groq = require('groq-sdk');

const groq = new Groq();

exports.processProjectPrompt = async (req, res) => {
  const { career, count } = req.body;  
  console.log(req.body);

  try {
    const prompt = `Give me ${count} project ideas that a ${career} engineer could work on. Each project should include:
    - Title of the project
    - Description
    - Tech stack
    - Modules that can be implemented
    - Tips to develop the module
    - Maximum time to develop`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      model: "llama3-8b-8192",
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    const content = chatCompletion.choices[0]?.message?.content || "";

    const projectData = content.split("**Project").filter(project => project.trim() !== '').map((project, index) => {
      const projectNumber = index + 1;
      return { [`${projectNumber}`]: project.trim() };  
    });

    const formattedProjects = Object.assign({}, ...projectData);

    const existingProjects = await Project.findOneAndUpdate(
      { careerId: career },
      {
        $set: {
          projects: formattedProjects
        }
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: 'Project prompt processed successfully', content });
  } catch (error) {
    console.error('Error processing project prompt:', error);
    res.status(500).send('Error processing project prompt');
  }
};

exports.getProjectsByCareer = async (req, res) => {
  const { careerId } = req.params;  

  try {
    const project = await Project.findOne({ careerId });

    if (!project) {
      return res.status(404).json({ message: `No projects found for career ${careerId}` });
    }

    // Return the projects
    res.status(200).json({ projects: project.projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).send('Error fetching projects');
  }
};
