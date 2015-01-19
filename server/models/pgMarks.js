'use strict';

module.exports = function(sequelize, DataTypes) {
  var Mark = sequelize.define('Marks', {
    context:{
        type        : DataTypes.TEXT,
        allowNull   : false
    },
    search:{
        type        : DataTypes.ENUM,
        values      : ['simple','regex','phantom'],
        defaultValue: 'simple',
        allowNull   : false,
    }
       
  }, {
    tableName: 'marks',
    timestamps: true,
    paranoid: true,
    classMethods: {
        associate: function(models) {
          Mark.hasMany(models.Perm);
          Mark.belongsTo(models.Site);
          Mark.belongsTo(models.User);
        }
    }
  });
 
  return Mark;
};