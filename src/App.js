import './App.css';
import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

function App() 
{
  const StylePokemon = styled.div`
    background-color: green;
    border: solid yellow 10px;
    padding: 5px;
    `;
  
  const Weaknesses =  [
    {
      type: "grass",
      weaknesses: [
                    "Flying", 
                    "Fire", 
                    "Ice", 
                    "Poison"
                  ]
    },
    {
      type: "poison",
      weaknesses: [
                    "Psychic"
                  ]
    }
  ];

  const [currentId, setcurrentId] = useState(1)
  const [pokemon, setPokemon] = useState({sprites:{}, weight:0, abilities:[], Weaknesses:[]});
  const pokeApe = `https://pokeapi.co/api/v2/pokemon/`;
  const [isLoading, setIsLoading] = useState(false);
  const [types, setTypes] = useState([]);


  useEffect(()=> {
    fetch(`${pokeApe}${currentId}`)
    .then(response => response.json())
    .then(pokemonData => {
      console.log(pokemonData);
      setcurrentId(pokemonData.id)
      setPokemon(pokemonData);
      typePokemon();
    })
  }, [currentId]);

  const getPokemon = (id) => {
    setcurrentId(id);
  };

  const typePokemon= () => {
    setTypes(pokemon.types.map(
      item => item.type.name));
   };

  return (
    <StylePokemon>
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
            <div className="Image"> 
              <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
            </div> 
            <div>
              <label>STATS: </label> 
              
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
                <label>TYPES: </label>
                <div>
                {
                    types.map(item => (
                        <div className='TypePokemon'>
                          {item}
                      </div>
                    ))
                }
                </div>
            </div>
            <div>
              <br/>
              <label>WEAKNESSES: </label>
              {/* <label>{pokemon.Weaknesses.map(item => (
                <div key={uuidv4()}>
                  <lable>{item.weaknesses.type}</lable>
                </div>
              ))}</label>    */}
            </div>            
            <div className='Buttons'>
              <AiFillCaretLeft onClick={()=> getPokemon(currentId > 1 ? currentId - 1 : currentId)}/>
              <AiFillCaretRight onClick={()=> getPokemon(currentId + 1)}/>
            </div>
          </div>
        )
      }        
      </header>
      </div> 
    </StylePokemon>   
    
  );
}

export default App;
