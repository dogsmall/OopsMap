const mongoose = require('mongoose')
mongoose.Promise = global.Promise
export default async(config) => {
  let connectionString = config.mongoUrl
  let db = mongoose.connection

  db.on('error', console.error.bind(console, 'mongoose connection error:'))
  db.once('open', () => {
    return console.log('[mongo] opened successfully')
  })

  let exit = () => {
    db.close(() => {
      console.log('[mongo] info: mongo is disconnected through app termination')
      process.exit(0)
    })
  }

  process.on('SIGINT', exit).on('SIGTERM', exit)
  try {
    await mongoose.connect(connectionString)
  } catch (err) {
    console.log(`[mongo] Error connecting to: ${connectionString}. ${err}`)
    return process.exit(1)
  }
}
