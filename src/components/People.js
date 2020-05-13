import React, { useEffect, useState } from 'react';
import ObiWan from './img/ObiWan.webp';
import { Link } from '@reach/router';

const PeopleDisplay = ({id}) => {
    const [people, setPeople] = useState('');
    const [homeworld, setHomeworld] = useState(true);
    const [validPerson, setValidPerson] = useState(true);
    const [planetID, setPlanetID] = useState('');

    useEffect(() =>{
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                    setPeople(response)
                    return response
            })
            .then(response => {
                if(response.hasOwnProperty('detail')){
                    setValidPerson(false)
                }
                else{
                    setValidPerson(true)
                    return response;
                }
            })
            .then(response => {
                return fetch(response.homeworld);
            })
            .then(response => {
                return response.json();
            })
            .then(response =>{
                setHomeworld(response);
                return response;
            })
            .then(response =>{
                let planetid = response.url.split('/')
                setPlanetID(planetid[planetid.length-2])
            })
            .catch(err => {
                setValidPerson(false)
            })
    }, [id]);

    return(
        <div>
            {
                validPerson?
                    <div>
                        <p>Name: {people.name}</p>
                        <p>Height: {people.height} cm</p>
                        <p>Mass: {people.mass} kg</p>
                        <p>Hair Color: {people.hair_color}</p>
                        <p>Skin Color:{people.skin_color}</p>
                        <p>Eye Color: {people.eye_color}</p>
                        <p>Birth Year: {people.birth_year}</p>
                        <p>Gender: {people.gender}</p>
                        <p>Homeworld: <Link to ={`/planets/${planetID}`}>{homeworld.name}</Link></p>
                    </div>:
                    <div>
                        <h1>These aren't the droids you're looking for</h1>
                        <img src={ObiWan}></img>
                    </div>
            }
        </div>
    )
}

export default PeopleDisplay;