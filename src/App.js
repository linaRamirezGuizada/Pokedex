import './App.css';
import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {

  const [currentId, setcurrentId] = useState(1)
  const [pokemon, setPokemon] = useState({sprites:{}, weight:0, abilities:[]});
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
      
          <div>
            <div>
              <label>{pokemon.name}</label> 
            </div> 
            <div> 
              <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
            </div> 
            <div>
              <label>WEIGHT: </label> 
              <br/>
              <label>{pokemon.weight}</label> 
            </div>
            <div>
              <br/>
              <label>ABILITIES: </label> 
              <label>{pokemon.abilities.map(item => (
                <div key={uuidv4()}>
                  <lable>{item.ability.name}</lable>
                </div>
              ))}</label> 
            </div>
            <div>
              <br/>
              <button onClick={()=> getPokemon(currentId + 1)}>Next</button>
            </div>
            <div>
              <button onClick={()=> getPokemon(currentId - 1)}>Previus</button>
            </div>
          </div>
        
      
      </header>
    </div> 
  );
}

export default App;
