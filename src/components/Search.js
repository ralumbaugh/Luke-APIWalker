import React, { useState } from 'react';
import { navigate } from '@reach/router';

const Search = () =>{
    const [newCategory, setNewCategory] = useState("people");
    const [newID, setNewID] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/${newCategory}/${newID}`)
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
            <label htmlFor="ID">ID: </label>
            <input type="number" id="ID" onChange={(e) => setNewID(e.target.value)}></input>
            <button>Search</button>
        </form>
    )
}

export default Search;