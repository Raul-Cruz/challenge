import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../../src/index.css';

const CardPokemon = (props) => {

  return (
    <div className="card">
      <Card >
        <img src={props.pokemon.sprites.front_default}/> 
        <p> <strong>Name:</strong> {props.pokemon.types[0].type.name} </p>
        <p> <strong>Weight:</strong> {props.pokemon.weight} </p>
        <p> <strong>Move:</strong> {props.pokemon.moves[0].move.name} </p>
        <p> <strong>Ability:</strong> {props.pokemon.abilities[0].ability.name} </p>
        <button>Info</button>
      </Card>
    </div>
  )
}


export default CardPokemon