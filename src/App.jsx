import { useState, useEffect } from 'react'
import './App.css'
import { Card } from 'primereact/card';
import CardPokemon from './Component/CardPokemon';

function App() {

  const [listPokemon, setListPokemon] = useState([])
  const [results, setResult] = useState([])
  let arr = []   

    useEffect(() => { 
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((data) => {
      const promises = data.results.map((item) => fetch(item.url)
      .then((response) => response.json()));   
      Promise.all(promises)
      .then((allpokemon) => setListPokemon(allpokemon));
    });
}, []);

console.log(listPokemon)

if(listPokemon.length==0) return <h1>Cargando...</h1>
  return (
    <div> 
      <h3>List Pokemons</h3>
      {
        listPokemon.map(element => {
          return(
          <CardPokemon pokemon={element} key={element.id}/>
          )
        })
      }
      <p> <strong>1 - 2 - 3 - 4</strong></p>
    </div>   
  ) 
}

export default App
