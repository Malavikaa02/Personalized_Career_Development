const Skills = require('../models/skills');
const Groq = require('groq-sdk');

const groq = new Groq();

exports.processSkillsPrompt = async (req, res) => {
  const { career, count } = req.body;
  console.log(req.body);

  try {
    const prompt = `Give me ${count} top technical skills required for a ${career} engineer. Each skill should include:
    - Skill name
    - A short description in 2 lines`;

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

    const skills = content.split(/\d+\.\s+/).filter(skill => skill.trim() !== '').map((skill, index) => {
      const skillNumber = index + 1; 
      return { [`${skillNumber}`]: skill.trim() }; 
    });

    const formattedSkills = Object.assign({}, ...skills);

    const existingSkills = await Skills.findOneAndUpdate(
      { careerId: career },
      { $set: { skills: formattedSkills } },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: 'Skills prompt processed successfully', skills: formattedSkills });
  } catch (error) {
    console.error('Error processing skills prompt:', error);
    res.status(500).send('Error processing skills prompt');
  }
};

exports.getSkillsByCareer = async (req, res) => {
  const { careerId } = req.params;

  try {
    const skillsData = await Skills.findOne({ careerId });

    if (!skillsData) {
      return res.status(404).json({ message: `No skills found for career ${careerId}` });
    }

    res.status(200).json({ skills: skillsData.skills });
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).send('Error fetching skills');
  }
};
