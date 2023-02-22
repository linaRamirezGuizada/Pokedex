import React from "react";
import {v4 as uuidv4} from 'uuid';
import { Box } from '@mui/system';

function Weaknesses(props){
    const weaknessesList = [
        {
            forType: "electric", 
            weakness: [
                "ground"
            ]
        },
        {
            forType: "fairy", 
            weakness: [
                "steel",
                "poison"
            ]
        },
        {
            forType: "fighting", 
            weakness: [
                "fairy",
                "psychic",
                "flying"
            ]
        },
        {
            forType: "bug", 
            weakness: [
                "fire",
                "rock",
                "flying"
            ]
        },
        {
            forType: "dark", 
            weakness: [
                "fairy",
                "bug"
            ]
        },
        {
            forType: "dragon", 
            weakness: [
                "dragon",
                "ice",
                "fairy"
            ]
        },
        {
            forType: "grass", 
            weakness: [
                "flying", 
                "poison",
                "ice"
            ]
        },
        {
            forType: "ground", 
            weakness: [
                "grass",
                "ice",
                "water"
            ]
        },
        {
            forType: "ice", 
            weakness: [
                "fighting",
                "rock",
                "steel"
            ]
        },
        {
            forType: "normal", 
            weakness: [
                "fighting"
            ]
        },
        {
            forType: "poison", 
            weakness: [
                "ground",
                "psychic"
            ]
        },
        {
            forType: "fire", 
            weakness: [
                "ground",
                "rock",
                "water"
            ]
        },
        {
            forType: "flying", 
            weakness: [
                "electric",
                "rock"
            ]
        },
        {
            forType: "ghost", 
            weakness: [
                "dark",
                "ghost"
            ]
        },
        {
            forType: "steel", 
            weakness: [
                "ground",
                "fire",
                "fighting"
            ]
        },
        {
            forType: "water", 
            weakness: [
                "electric",
                "grass"
            ]
        },
        {
            forType: "psychic", 
            weakness: [
                "bug",
                "dark",
                "ghost"
            ]
        },
        {
            forType: "rock", 
            weakness: [
                "grass",
                "fighting",
                "ground",
                "steel"
            ]
        }
       
    ];

    let actualPokWeaknesses = [];
    props.pokeTypes.forEach(pokeType => {
        weaknessesList.forEach(types =>{
            if(pokeType.type.name === types.forType){
                actualPokWeaknesses.push(...types.weakness)
            }
        })
    });

    return(
        <Box sx={{
            display:"flex", 
            flexDirection: "row" , 
            justifyContent: "space-around"}}>
            {actualPokWeaknesses.map(item => (
              <div key={uuidv4()}>
                <label>{item}</label>
              </div>
            ))}
        </Box>
    );
}

export default Weaknesses;