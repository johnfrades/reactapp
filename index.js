const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const io = require('socket.io')();
const cloudDB = 'mongodb://admin:admin@ds129315.mlab.com:29315/react';

mongoose.connect(cloudDB, () => {
  console.log('DB Connected')
})

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const UserModelSchema = new mongoose.Schema({
  name: String,
  password: String
});

const User = mongoose.model('User', UserModelSchema);


io.on('connection', (client) => {

  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('sendMessage', (data) => {
    console.log(`Message from the frontend: ${data}`)
  });

});

app.get('/api/user', (req, res) => {
  User.find({}, (err, listOfUsers) => {
    if(err){
      console.log(err)
    }
    setTimeout(() => {
      res.json(listOfUsers);
    }, 3000)
  })
});

app.post('/api/adduser', (req, res) => {
  console.log(req.body)
  User.create({name: req.body.name, password: req.body.password}, (err, newUser) => {
    console.log(newUser)
    res.json(newUser);
  })
});

app.post('/api/login', (req, res) => {
  console.log(req.body)
  User.findOne({
    name: req.body.name,
    password: req.body.password
  }, (err, user) => {
    if(user){
      console.log(req.body)
      console.log(user)
      res.json({
        success: true,
        info: user
      });
    } else if(!user){
      res.json({
        success: false,
        message: 'You Suck cock'
      })
    }
  })
})

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
app.listen(3001, () => {
  console.log('Server started at port 3001')
})