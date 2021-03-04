'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TOKEN: '"26586a61d706c68d1b0377f7b5fe41f1e9f86c1d"'
})
