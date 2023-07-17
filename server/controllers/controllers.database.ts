import db from "../models/index"

const { Pokemon, Type } = db.sequelize.models

export async function getDBPokemons () {
    try {
        const allDBPokemons: Array<Object> = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name", "id"],
                through: {
                    attributes: []
                }
            }
        })
        console.log(allDBPokemons)
        return allDBPokemons
    } catch (err) {
        console.error(err);
    }
    return []
}

export async function getAPokemon(id: string | number) {
    try {
        const browsePokemon: Object | undefined = await Pokemon.findByPk(id)
        return browsePokemon
    } catch (err) {
        console.error(err);
    }
    return undefined
}

export async function createPokemon(pokemonStats: Object) {
    try {
        const newPokemon: Object | undefined = await Pokemon.create(pokemonStats)
        if (!newPokemon) {
            throw new Error("No se a podido crear el Pokemon!")
        }
        return {
            message: "Pokemon creado con exito!",
            newPokemon
        }
    } catch (err) {
        console.error(err);
    }
    return undefined
}