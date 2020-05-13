import React, { useEffect, useState } from 'react';
import ObiWan from './img/ObiWan.webp';

const SpeciesDisplay = ({id}) =>{
    const [species, setSpecies] = useState('');
    const [validSpecies, setValidSpecies] = useState(true);
    
    useEffect(() =>{
        console.log("Hello")
        fetch(`https://swapi.dev/api/species/${id}`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                    setSpecies(response)
                    return response
            })
            .then(response => {
                if(response.hasOwnProperty('detail')){
                    setValidSpecies(false)
                }
                else{
                    setValidSpecies(true)
                }
            })
            .catch(err => {
                setValidSpecies(false)
            })
    }, [id]);

    return(
        <div>
            {
                validSpecies?
                    <div>
                        <p>Name: {species.name}</p>
                        <p>Classification: {species.classification}</p>
                        <p>Designation: {species.designation}</p>
                        <p>Average Height: {species.average_height} cm</p>
                        <p>Skin Colors: {species.skin_colors}</p>
                        <p>Hair Colors: {species.hair_colors}</p>
                        <p>Eye Colors: {species.eye_colors}</p>
                        <p>Average Lifespan: {species.average_lifespan} years</p>
                        <p>Language: {species.language}</p>
                    </div>:
                    <div>
                        <h1>These aren't the droids you're looking for</h1>
                        <img src={ObiWan}></img>
                    </div>
            }
        </div>
    )
}

export default SpeciesDisplay;