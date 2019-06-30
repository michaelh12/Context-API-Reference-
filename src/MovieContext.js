import React, { useState, createContext } from 'react';

/*
    ---- Example for useReducer ----

    const initialState = {count:0}

    function reducer(state, action) {
        switch(action.type){
            case 'Increment':
                return {count: state.count + 1};
            case 'Decrement':
                return {count: state.count - 1}
            default:
                return state;
            }
    }

*/

export const MovieContext = createContext();

export const MovieProvider = props => {
  // const [state, dispatch] = useReducer(reducer, initialState)

  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23124,
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 2566124,
    },
    {
      name: 'Inception',
      price: '$10',
      id: 23524,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
