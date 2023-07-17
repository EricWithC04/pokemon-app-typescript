import { createPokemon, getAPokemon, getDBPokemons } from "./controllers.database";

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
    try {
        const aNewPokemon: Object | undefined = await createPokemon({name, life, atk, def, speed, height, size})
        if (!aNewPokemon) {
            throw new Error ("No se pudo crear el Pokemon!")
        }
        res.status(201).send(aNewPokemon)
    } catch (err) {
        console.error(err);
    }
}