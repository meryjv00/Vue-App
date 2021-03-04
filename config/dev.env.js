'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TOKEN: '"4a761a6626d109ed303199acbd0ac24664cc770c"'
})
