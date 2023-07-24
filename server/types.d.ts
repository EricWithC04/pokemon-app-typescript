export interface pokemonAttributes {
    id: string,
    name: string,
    life: number,
    atk: number,
    def: number,
    speed: number,
    height: number,
    size: number
}

export interface TypeAttributes {
    id: number,
    name: string
}

export interface pokemonsTypesAttributes {
    idPokemon: string,
    idType: number
}