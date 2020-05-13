import React from 'react';
import './App.css';
import Search from './components/Search'
import { Router } from '@reach/router';
import PeopleDisplay from './components/People';
import PlanetsDisplay from './components/Planets';
import SpeciesDisplay from './components/Species';
import StarshipDisplay from './components/Starships';

function App() {

  return (
    <div className="App">
      <Search />
      <Router>
        <PeopleDisplay path="/people/:id" />
        <PlanetsDisplay path="/planets/:id"/>
        <SpeciesDisplay path="/species/:id"/>
        <StarshipDisplay path="/starships/:id"/>
      </Router>
    </div>
  );
}

export default App;
