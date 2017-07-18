const mongoose = require('mongoose')

mongoose.connect('mongodb://sdhj:Joke123@ant04.idatage.com:27021/sdhj')

const db = mongoose.connection

db.once('open', () => {
  console.log('mongodb connnected successfully!')
})

db.on('disconnected', () => {
  console.log('mongodb disconnected!')
})

module.exports = mongoose
