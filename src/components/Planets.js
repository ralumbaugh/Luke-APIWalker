import React, { useEffect, useState } from 'react';
import ObiWan from './img/ObiWan.webp';

const PlanetsDisplay = ({id}) =>{
    const [planet, setPlanet] = useState('');
    const [validPlanet, setValidPlanet] = useState(true);

    useEffect(() =>{
        console.log("Hello")
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                    setPlanet(response)
                    return response
            })
            .then(response => {
                if(response.hasOwnProperty('detail')){
                    setValidPlanet(false)
                }
                else{
                    setValidPlanet(true)
                }
            })
            .catch(err => {
                setValidPlanet(false)
            })
    }, [id]);

    return(
        <div>
            {
                validPlanet?
                    <div>
                        <p>Name: {planet.name}</p>
                        <p>Rotation Period: {planet.rotation_period}</p>
                        <p>Orbital Period: {planet.orbital_period}</p>
                        <p>Diameter: {planet.diameter}</p>
                        <p>Climate: {planet.climate}</p>
                        <p>Gravity: {planet.gravity}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Population: {planet.population}</p>
                    </div>:
                    <div>
                        <h1>These aren't the droids you're looking for</h1>
                        <img src={ObiWan}></img>
                    </div>
            }
        </div>
    )
}


export default PlanetsDisplay;