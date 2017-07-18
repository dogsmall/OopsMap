
const Koa = require('koa'),
  // Router = require('koa-router'),
  // json = require('koa-json'),
  // logger = require('koa-logger') // 引入各种依赖
  // let config = require('./server/config/config')
  // let mongodb = require('./server/config/mongo.js')
  map = require('./server/routes/map.js')
const app = new Koa()
// const router = new Router()
// router.get('/', async function (ctx, next) {
//   console.log(ctx.query)
//   let year = ctx.query.year
//   let quarter = ctx.query.quarter

//   console.log('1111')
//   let s = await Map.find({year: year, quarter: quarter})
//   console.log(s)
//   ctx.body = 'gsw'
// })
// console.log(map.routes())
// router.use(map.routes())
app
  .use(map.routes())
  .use(map.allowedMethods())
// app.use(async function (next) {
//   let start = new Date()
//   await next
//   let ms = new Date() - start
//   console.log('%s %s - %s', this.method, this.url, ms) // 显示执行的时间
// })

// app.use(require('koa-bodyparser')())
// app.use(json())
// app.use(logger())

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

app.listen(8889, () => {
  console.log('Koa is listening in 8889')
})

module.exports = app
