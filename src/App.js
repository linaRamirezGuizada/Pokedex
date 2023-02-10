import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [currentId, setcurrentId] = useState()
  const [pokemon, setPokemon] = useState({});
  const pokeApe = `https://pokeapi.co/api/v2/pokemon/`;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    fetch(`${pokeApe}${currentId}`)
    .then(response => response.json())
    .then(pokemonData => {
      console.log(pokemonData);
      setcurrentId(pokemonData.id)
      setPokemon(pokemonData);
    })
  }, [currentId]);

  const getPokemon = (id) => {
    setcurrentId(id);
  };

  return (
    <div className="App">
      <header className="App-header">
      {
        isLoading ? (
          <></>
        ) : (
          <div>
            <div>
              <label>{pokemon.name}</label> 
            </div> 
            <div> 
              <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
            </div> 
            <div>
              <button onClick={()=> getPokemon(currentId + 1)}>Next</button>
            </div>
            <div>
              <button onClick={()=> getPokemon(currentId - 1)}>Previus</button>
            </div>
            <div>
              <label>{pokemon.weigth}</label>
            </div>
          </div>
        )
      }
      </header>
    </div> 
  );
}

export default App;
