const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const request = require('request')
const port = 8081

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

// Parse request body as JSON
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/boosterbears').then(
  () => {
    console.log('Database connection is successful')
  },
  err => {
    console.log('Error when connecting to the database' + err)
  }
)
var router = {
  Adduser: function () {
    app.route('/create').post((req, res) => {
      console.log(req)
      console.log(res)
    })
  }

}
// app.get('/login', function (req, res) {
//   // Make a request for the news section of `ycombinator`
//   request('https://www.reddit.com/r/Eyebleach/', function (response) {
//     console.log(response)
//   }).catch(function (err) {
//     // If an error occurred, send it to the client
//     res.json(err)
//   })
// })

app.listen(() => {
  console.log('Listening on port ' + port)
})

module.exports = router
