'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/livemarks-test'
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
  }
};