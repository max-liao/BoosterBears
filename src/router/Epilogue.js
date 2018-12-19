var Sequelize = require('sequelize')
var epilogue = require('epilogue')
var http = require('http')

// Define your models
var database = new Sequelize('database', 'root', 'password');
var User = database.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
})

// Initialize server
var server
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
server = http.createServer(app)

// Initialize epilogue
epilogue.initialize({
  app: app,
  sequelize: database
})

// Create REST resource
var userResource = epilogue.resource({
  model: User,
  endpoints: ['/users', '/users/:id']
})

// Create database and listen
database
  .sync({ force: true })
  .then(function () {
    server.listen(function () {
      var host = server.address().address
      var port = server.address().port

      console.log('listening at http://%s:%s', host, port)
    })
  })