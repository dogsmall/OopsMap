const Map = require('../models/map')

async function getPoint() {
  let year = this.query.year
  let quarter = this.query.quarter

  console.log('1111')
  let s = await Map.find({ year: year, quarter: quarter })
  console.log(s)
  this.body = 'gsw'
}

module.exports = {
  getPoint
}
