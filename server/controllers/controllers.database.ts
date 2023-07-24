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
        if (!browsePokemon) {
            throw new Error("No se a encontrado el Pokemon!")
        }
        return browsePokemon
    } catch (err) {
        console.error(err);
    }
    return undefined
}

export async function createPokemon(pokemonStats: any) {
    try {
        const newPokemon = await Pokemon.create(pokemonStats)
        if (!newPokemon) {
            throw new Error("No se a podido crear el Pokemon!")
        }
        if (pokemonStats.types.length === 0) {
            throw new Error ("El pokemon debe tener al menos un tipo!")
        }

        const typesDB = await Type.findAll({
            where: {
                name: pokemonStats.types
            }
        })
        newPokemon.addType(typesDB)

        return {
            message: "Pokemon creado con exito!",
            newPokemon
        }
    } catch (err) {
        console.error(err);
    }
    return undefined
}

export async function getAllTypes() {
    try {
        const allTypes: Array<Object> = await Type.findAll()
        if (allTypes.length === 0) {
            throw new Error("No se han encontrado Tipos!")
        }
        return allTypes
    } catch (err) {
        console.error(err);
    }
    return []
}