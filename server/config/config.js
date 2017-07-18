const fs = require('fs')
const { trim } = require('lodash')
export const env = trim(fs.existsSync('./env') ? fs.readFileSync('./env', 'utf8') : 'dev')
export let config = require('./' + env)
