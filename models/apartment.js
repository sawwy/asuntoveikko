'use strict';
module.exports = function(sequelize, DataTypes) {
  var Apartment = sequelize.define('Apartment', {
    address: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    roomcount: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    location: DataTypes.GEOMETRY('POINT')
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Apartment;
};