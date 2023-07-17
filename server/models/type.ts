'use strict';
// const { Model, UUIDV4 } = require("sequelize");
import { Model } from "sequelize";

interface TypeAttributes {
  id: number,
  name: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Type extends Model<TypeAttributes> 
  implements TypeAttributes {
    id!: number
    name!: string
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Type.belongsToMany(models.Pokemon, {
        through: models.PokemonsTypes,
        foreignKey: "idType"
      })
    }
  }
  Type.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Type',
    timestamps: false
  });
  return Type;
};