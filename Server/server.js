const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/llm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Define User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  picture: String,
});

const User = mongoose.model('User', userSchema);

// Route to save user data
app.post('/saveUser', async (req, res) => {
  const { name, email, picture } = req.body;
  console.log(req.body); // Log request body for debugging

  try {
    // Check if the user already exists in the database
    let user = await User.findOne({ email });

    if (!user) {
      // If user does not exist, create a new user
      user = new User({ name, email, picture });
      await user.save();
      return res.status(201).send('User created');
    } else {
      // User already exists, send a message
      return res.status(200).send('User already exists');
    }
  } catch (error) {
    console.error('Error saving user:', error); // Log error for debugging
    return res.status(500).send('Error saving user'); // Send error response
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


