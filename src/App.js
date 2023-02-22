import './App.css';
import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import MediaCard from './components/CustomCard';
import useChangePokemon from './components/CustomHook'
import Button from './components/Button';

function App() 
{
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/`;
  const [previousPokemon,nextPokemon,pokemon,pokemonSpecies]=useChangePokemon(pokeApi);
 
  return (
    
      <div className="App">
      <header className="App-header">        
        <div>
          <MediaCard
            pokeNum={pokemon.id}
            pokeName={pokemon.name}
            pokeImage={pokemon.sprites.other.home.front_default}
            pokeImageLow={pokemon.sprites.front_default}
            pokeWeight={pokemon.weight}
            pokeHeight={pokemon.height}
            pokeAbilities={pokemon.abilities}
            pokeTypes={pokemon.types}
            pokeStats={pokemon.stats}
            pokeColor={pokemonSpecies.color}
          ></MediaCard>
        </div> 
        <Button 
          onClick={nextPokemon}
          text={">"}
        ></Button>
        <Button 
          onClick={previousPokemon}
          text={"<"}
        ></Button>
      </header>
      </div> 
  );
}

export default App;
