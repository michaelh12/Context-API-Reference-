import React from 'react';
import './App.css';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <div id="add-movie">
          <AddMovie />
        </div>
        <Nav />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
