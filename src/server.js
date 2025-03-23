const express = require('express');
const  mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Database connected")
})
.catch((err) => {
  console.log(err)
})
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

const User = require('./model/User.js');


app.post('/api/users', async (req, res) => {  
  const { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const user = new User({
    name,
    email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
}
);

app.delete('/api/users', async (req, res) => {
  try {
    await User.deleteMany();
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = app;
