//we will export our configuration to make it available elsewhere when needed.

'use strict';
var chai = require('chai')

module.exports = {
  env: 'production',
  db: process.env.MONGOHQ_URL || process.env.MONGODB_URI,
  port: process.env.PORT || 4000,
};