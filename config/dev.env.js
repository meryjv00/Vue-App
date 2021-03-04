'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TOKEN: '"f2f8d5fec1164868ca82264f4bdd46ec9a2cb123"'
})
