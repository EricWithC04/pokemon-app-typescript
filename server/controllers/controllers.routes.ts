import { createPokemon, getAPokemon, getAllTypes, getDBPokemons } from "./controllers.database";

export async function routeGetAllPokemons (_req: any, res: any) {
    try {
        const pokemons: Array<Object> = await getDBPokemons()
        if (pokemons.length === 0) {
            res.status(404).send("No se han encontrado Pokemones!")
        } else {
            res.status(200).send(pokemons)
        }
    } catch (err) {
        console.error(err)
    }
}

export async function routeGetAPokemon(req: any, res: any) {
    const { id } = req.params
    try {
        const onePokemon: Object | undefined = await getAPokemon(id)
        if (!onePokemon) {
            res.status(404).send("No se ha encontrado el pokemon!")
        } else {
            res.status(200).send(onePokemon)
        }
    } catch (err) {
        console.error(err);
    }   
}

export async function routeCreatePokemon(req: any, res: any) {
    const name = req.body.name as string
    const life = req.body.life as number
    const atk = req.body.atk as number
    const def = req.body.def as number
    const speed = req.body.speed as number
    const height = req.body.height as number
    const size = req.body.size as number
    const types = req.body.types as Array<string>
    try {
        const aNewPokemon: Object | undefined = await createPokemon({name, life, atk, def, speed, height, size, types})
        if (!aNewPokemon) {
            throw new Error ("No se pudo crear el Pokemon!")
        }
        res.status(201).send(aNewPokemon)
    } catch (err) {
        console.error(err);
    }
}

export async function routeGetAllTypes(_req: any, res:any) {
    try {
        const allTypes: Array<Object> = await getAllTypes()
        if (allTypes.length === 0) {
            res.status(404).send("No se han encontrado los Tipos!")
            throw new Error("No se han encontrado los Tipos!");
        }
        res.status(200).send(allTypes)
    } catch (err) {
        console.error(err);
    }
}