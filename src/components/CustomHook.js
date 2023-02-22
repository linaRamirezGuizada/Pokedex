import { useState } from "react";
import { useEffect } from "react";

function useChangePokemon(pokeApi) {
    const [currentId, setCurrentId] = useState(1);
    const [pokemon, setPokemon] = useState({ id:0, sprites: { other: { home: {} } }, weight: 0, height: 0, abilities: [], types: [], stats: [], species: { url: "" } });
    const [pokemonType, setPokemonType] = useState({ color: { name: '#FFFF00' } });

    useEffect(() => {
        fetch(`${pokeApi}${currentId}`)
            .then(response => response.json())
            .then(pokemonData => {
                setCurrentId(pokemonData.id);
                setPokemon(pokemonData);
                console.log(pokemonData);
                
                fetch(`${pokemonData.species.url}`)
                    .then(response2 => response2.json())
                    .then(pokemonSpeciesData => {
                        setPokemonType(pokemonSpeciesData);
                    })
            });
    }, [currentId]);

    function nextPokemon() {
        if (currentId === 0) 
        {
            setCurrentId(1);
        }
        else 
        {
            setCurrentId(currentId - 1);
        }   
    }

    function previousPokemon() {
        if (currentId === 150) 
        {
            setCurrentId(150);
        }
        else 
        {
            setCurrentId(currentId + 1);
        }       
    }   

    return [ nextPokemon, previousPokemon, pokemon, pokemonType];
}

export default useChangePokemon;