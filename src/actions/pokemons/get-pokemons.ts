import { pokeApi } from "../../config/api/pokeApi";
import { Pokemon } from "../../domain";


export const getPokemons = async ( ): Promise<Pokemon[]> => {

    try {
        const url = `/pokemon`;
        const {data} = await pokeApi.get(url);

        console.log(data)

        return [];

    } catch (error) {
        console.log(error);
        throw new Error('Error getting pokemons');
    }
};