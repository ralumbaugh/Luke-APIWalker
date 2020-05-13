import React, { useEffect, useState } from 'react';
import ObiWan from './img/ObiWan.webp';

const StarshipDisplay = ({id}) =>{
    const [ship, setShip] = useState('');
    const [validShip, setValidShip] = useState('');

    useEffect(() =>{
        console.log("Hello")
        fetch(`https://swapi.dev/api/starships/${id}`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                    setShip(response)
                    return response
            })
            .then(response => {
                if(response.hasOwnProperty('detail')){
                    setValidShip(false)
                }
                else{
                    setValidShip(true)
                }
            })
            .catch(err => {
                setValidShip(false)
            })
    }, [id]);

    return(
        <div>
            {
                validShip?
                <div>
                    <p>Name: {ship.name}</p>
                    <p>Model: {ship.model}</p>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Cost: {ship.cost_in_credits} credits</p>
                    <p>Length: {ship.length} meters</p>
                    <p>Max Atmospheric Speed: {ship.max_atmosphering_speed} kph</p>
                    <p>Crew: {ship.crew}</p>
                    <p>Passengers: {ship.passengers}</p>
                    <p>Cargo Capacity: {ship.cargo_capacity/1000} metric tons</p>
                    <p>Consumables: {ship.consumables}</p>
                </div>:
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img src={ObiWan}></img>
                </div>
            }
        </div>
    )
}

export default StarshipDisplay;