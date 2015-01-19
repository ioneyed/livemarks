var fs      = require('fs'),
  path      = require('path'),
  Sequelize = require('sequelize'),
  lodash    = require('lodash'),
  config = require('../config/environment');

  sequelize = new Sequelize(config.db.database, config.db.username, config.db.password,{
    host: config.db.host,
    dialect: 'postgres',
    pool: { maxConnections: config.db.pool.maxConnections, maxIdleTime: config.db.pool.maxIdleTime},
    define:{
      underscored:true
    }
  }),
  moment    = require('moment'),
  db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.indexOf('pg')!==-1);
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

// Synchronizing any model changes with database.
// WARNING: this will DROP your database everytime you re-run your application
/*sequelize
  .sync({force: true})
  .complete(function(err){
    if(err) console.log("An error occured %j",err);
    else console.log("Database dropped and synchronized");
});*/
sequelize
  .sync({force: true})
  .complete(function(err){
    //seed data
    if(err) console.log(err);
});

module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);