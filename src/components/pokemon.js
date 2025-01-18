import React, {useEffect, useState} from 'react';
import styles from './pokemon.module.css';
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
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={img} alt="pokemon" className={styles.image}/>
            </div>
            <p className={styles.text}>{name}</p>
        </div>
    )
}
export default Pokemon;