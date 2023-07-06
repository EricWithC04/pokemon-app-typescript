'use strict';
import {
  Model
} from "sequelize";

interface pokemonsTypesAttributes {
  idPokemon: string,
  idType: number
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PokemonsTypes extends Model<pokemonsTypesAttributes> 
  implements pokemonsTypesAttributes {
    idPokemon!: string
    idType!: number
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models: any) {
      // define association here
    }
  }
  PokemonsTypes.init({
    idPokemon: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Pokemon",
        key: "id"
      }
    },
    idType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Type",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'PokemonsTypes',
  });
  return PokemonsTypes;
};