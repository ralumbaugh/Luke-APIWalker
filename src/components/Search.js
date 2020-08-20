import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const Search = () =>{
    const [newCategory, setNewCategory] = useState("people");
    const [newID, setNewID] = useState("");
    const [allPeople, setAllPeople] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/${newCategory}/${newID}`)
    }
// Can use this next line to grab the names of people to later map a dropdown box
    // useEffect(() =>{
    //     fetch(`https://swapi.dev/api/people/`)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(response => {
    //             console.log(response);
    //             setAllPeople(response.results);
    //         })
    // }, [])

    const showAllPeople = () =>{
        console.log(allPeople);
    }

    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor="category">Search for: </label>
            <select id="category" onChange={(e) => setNewCategory(e.target.value)}>
                <option value="people">People</option>
                <option value="starships">Starships</option>
                <option value="species">Species</option>
                <option value="planets">Planet</option>
            </select>
            <button onClick={showAllPeople}>Click me</button>
            {/* <select id="allPeople">
                {
                    allPeople.map((person, i) =>
                    <option value="person">{person.name}</option>
                    )
                }
            </select> */}
            <label htmlFor="ID">ID: </label>
            <input type="number" id="ID" onChange={(e) => setNewID(e.target.value)}></input>
            <button>Search</button>
        </form>
    )
}

export default Search;