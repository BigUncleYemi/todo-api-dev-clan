//we will export our configuration to make it available elsewhere when needed.

'use strict';

module.exports = {
    env: 'development',
    db: 'mongodb://localhost/Tododb',
    port: process.env.PORT || 4000,
} ;