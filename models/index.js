require('dotenv').require()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

const mongoose = require('mongoose')

module.exports.Place = require('./places')