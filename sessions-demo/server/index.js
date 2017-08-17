const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      middleware = require('./middleware'),
      config = require('./config'),
      app = express(),
      port = 3000;

// =========== TOP LEVEL MIDDLEWARE ============ //

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: config.secret,
  saveUninitialized: false,
  resave: false
}))

// ============== ENDPOINTS =============== //

app.post('/api/login', middleware.authenticate, (req, res) => {
  req.session.user = req.body.username;
  res.status(200).send("you're good to go!")

})

app.get('/api/user', (req, res) => {
  let user = req.session.user ? req.session.user : ''
  res.status(200).send({ user })
})

// logout
// req.session.destroy()



app.listen(port, () => console.log(`Listening on port ${port}`));