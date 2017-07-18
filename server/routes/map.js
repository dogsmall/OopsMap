// const auth = require('../controllers/getPoint')
const Router = require('koa-router')
const router = new Router()
const Map = require('../models/map')
// console.log(auth)
router.get('/map', async function (ctx) {
  let year = ctx.query.year
  let quarter = ctx.query.quarter

  console.log('1111')
  let s = await Map.find({ year: year, quarter: quarter })
  console.log(s)
  ctx.body = s
})

module.exports = router
