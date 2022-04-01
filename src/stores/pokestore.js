// https://pokeapi.co/api/v2/pokemon?limit=150
import { writable } from "svelte/store";

// such as hooks
export const pokemonDOM = writable([]);

const fetchPokemon = async (limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const image_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, key)=> {
        return {
            id: key + 1,
            name: data.name,
            image: `image_url/${key+1}.png`
        }
    });
    pokemonDOM.set(loadedPokemon);
}

setTimeout(() => {
    fetchPokemon(2);
}, 3000);