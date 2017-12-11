//we will export our configuration to make it available elsewhere when needed.

'use strict';

module.exports = {
  env: 'test',
  db: 'mongodb://localhost/TododbTest',
  port: process.env.PORT || 4100,
};