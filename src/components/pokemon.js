import React, {useEffect, useState} from 'react';
function Pokemon({name,url}){
    const [img, setImg] = useState('');
    useEffect(() => {
        async function fetching(){
            const response = await fetch(url);
            const json = await response.json()
            const imgPokemon = json.sprites.front_default;
            setImg(imgPokemon);
        }
        fetching();
    }, [url]);
    return(
        <div>
            <p>{name}</p>
            <img src={img} alt="pokemon" />
        </div>
    )
}
export default Pokemon;