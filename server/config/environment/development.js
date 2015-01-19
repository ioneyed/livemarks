'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/livemarks-dev'
  },
  db:{
    username: 'livemarks',
    password: 'livemarks',
    database: 'livemarks',
    host:     'localhost',
    pool:{
      maxConnections: 5,
      maxIdleTime:    30
    }
  },

  seedDB: true
};
