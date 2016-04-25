var express = require('express')
var session = require('express-session')

var app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.get('/', function(req, res) {
  console.log(req.session)
  var msg = 'hello ' + req.session.friend

  if(req.session.isAdmin) {
    msg += ' boss'
  } else {
    msg += ' minion'
  }
  res.send(msg)
})

app.get('/power-up', function(req, res) {
  req.session.isAdmin = true
  res.redirect('/')
})

app.get('/power-down', function(req, res) {
  req.session.isAdmin = false
  res.redirect('/')
})

app.get('/world', function(req, res) {
  req.session.friend = 'world'
  res.redirect('/')
})

app.get('/bob', function(req, res) {
  req.session.friend = 'bob'
  res.redirect('/')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000! Yep! Its true!');
});
