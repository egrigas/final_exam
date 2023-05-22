require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./models/userModel.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error));

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: 'Error occurred while fetching users' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (error) {
    res.status(500).send({ message: 'Error occurred while saving user' });
  }
});

app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const updateUserData = req.body;

  User.findByIdAndUpdate(userId, updateUserData)
    .then((updatedUser) => {
      if (updatedUser) {
        res.status(200).json({ message: 'User updated', user: updatedUser });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch((e) => console.log(e));
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send({ message: 'Error occurred while deleting user' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
