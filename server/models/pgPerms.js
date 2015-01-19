'use strict';

module.exports = function(sequelize, DataTypes) {
  var Perm = sequelize.define('Perm', {
    
    permissions: {
        type        : DataTypes.ENUM,
        values      : ['read','edit','admin'],
        defaultValue: 'read',
        allowNull   : false
    },
       
  }, {
    tableName: 'perms',
    timestamps: true,
    paranoid: true,
    classMethods: {
        associate: function(models) {
            //  Category.hasMany(models.Post,{foreignKey:'postId'});
        }
    }
  });
 
  return Perm;
};