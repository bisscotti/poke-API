import './App.css';
import Pokemon from './components/pokemon';
import PokemonCard from './components/pokemonCard';
import { useEffect, useState } from 'react';
function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function pokemonf(){
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const json = await response.json();
      setPokemons(json.results);
    }
    pokemonf();
  },[]);
  return (
    <div className='main'>
      <div className="App">
        {pokemons.map((poke) => (
            <Pokemon name={poke.name} url={poke.url}/>
        ))}
      </div>
    </div>
  );
}

export default App;
