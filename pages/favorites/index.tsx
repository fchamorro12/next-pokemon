import { Layout } from "../../components/layouts"
import { FavoritePokemons, NoFavorites } from "../../components/ui"
import { useState, useEffect } from 'react';
import localFavorites from "../../utils/localFavorites";

const FavoritesPage = () => {
    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])
    useEffect(() => {
        setFavoritesPokemons(localFavorites.pokemons())
    }, [])

    return (
        <Layout title='Pokemons - Favoritos'>
            {
                favoritesPokemons.length === 0
                    ? (<NoFavorites />) :
                    (
                        <FavoritePokemons favoritesPokemons={favoritesPokemons} />
                    )
            }
        </Layout >
    )
}

export default FavoritesPage