import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async(nameOrIr: string) => {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`)
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}