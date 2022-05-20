'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Answers, { foreignKey: 'quest_id' })
      this.belongsTo(models.Category, { foreignKey: 'cat_id' })
    }
  }
  Question.init({
    text: DataTypes.TEXT,
    cat_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
