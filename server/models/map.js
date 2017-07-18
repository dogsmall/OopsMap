var mongoose = require('./mongoose')
var schema = mongoose.Schema

var Address = new schema({
  _id: String,
  city: String,
  county: String,
  region: String,
  street: String,
  keyword: String,
  year: Number,
  quarter: Number,
  x: Number,
  y: Number,
  picName: Array,
  check: Boolean,
  tag: Number
})
// let films = mongoose.createConnection('mongodb://sdhj:Joke123@ant04.idatage.com:27021/sdhj')
// module.exports = films.model('idatage_address', Address)

module.exports = mongoose.model('idatage_address', Address)
