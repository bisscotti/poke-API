import React from 'react';
import { useState, useEffect } from 'react';

const PokemonCard = () => {
    const [data, setData] = useState([]);
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    useEffect(() => {
        async function fetching() {
            const response = await fetch(url);
            const json = await response.json();
            const data = await Promise.all(json.results.map(async (poke) => {
                const newr = await fetch(poke.url);
                const newjson = await newr.json();
                return{
                    name: poke.name,
                    img: newjson.sprites.front_default
                }
            }));
            setData(data);
        }
        fetching();
    }, []);
    return (
        <div>
            {data.map((pokemon,index) => (
                <div key={index}>
                    <img src={pokemon.img} alt="pokemon"/>
                    <p>{pokemon.name}</p>
                </div>
            ))}
        </div>
    )
}
export default PokemonCard;