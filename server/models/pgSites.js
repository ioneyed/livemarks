'use strict';

var moment = require("moment");

module.exports = function(sequelize, DataTypes) {
  var Site = sequelize.define('Site', {
    
    uri: {
        type        : DataTypes.STRING,
        allowNull   : false
    },
    lastAccessed: {
        type        : DataTypes.DATE,
        allowNull   : false,
        defaultValue: sequelize.NOW
    },
    status: {
        type        : DataTypes.INTEGER,
        defaultValue: 0,
        /*
          0: new
          200: success
          4xx: failed do not try again
          5xx: failed but try again in 1 day
        */
    }
          
          
        
  }, {
    tableName: 'sites',
    timestamps: true,
    paranoid: true,
    classMethods: {
        associate: function(models) {
            //  Category.hasMany(models.Post,{foreignKey:'postId'});
        }
    }
  });
 
  return Site;
};