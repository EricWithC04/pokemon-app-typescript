'use strict';

const { Model, UUIDV4 } = require('sequelize');
// import { Model, UUIDV4 } from "sequelize";


interface pokemonAttributes {
  id: string,
  name: string,
  life: number,
  atk: number,
  def: number,
  speed: number,
  height: number,
  size: number
}

module.exports = (sequelize: any, DataTypes : any) => {
  class Pokemon extends Model<pokemonAttributes> 
  implements pokemonAttributes {
    id!: string
    name!: string
    life!: number
    atk!: number
    def!: number
    speed!: number
    height!: number
    size!: number
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : any) {
      // define association here
      Pokemon.belongsToMany(models.Type, {
        through: "PokemonsTypes"
      })
    }
  }
  Pokemon.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};