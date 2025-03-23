const express = require('express');
const  mongoose  = require('mongoose');
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


app.post('/api/users', (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send('Please provide a name, email and password for the user');
  }
  
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password
  });
  user.save()
  .then(() => {
    res.status(201).send(user);
  }
  )
  .catch((err) => {
    console.log(err);
  }
  )
    });

module.exports = app;
