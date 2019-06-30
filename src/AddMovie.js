import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

const AddMovie = () => {
  const [state, setState] = useContext(MovieContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    console.log('local state', name, price);
    setState([
      ...state,
      {
        name: name,
        price: `$${price}`,
        id: ID(),
      },
    ]);
  };

  console.log(state);

  return (
    <form onSubmit={addMovie}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        placeholder="Add Name"
        onChange={updateName}
      />
      <label htmlFor="price">Price: </label>
      <input
        id="price"
        type="text"
        name="price"
        value={price}
        placeholder="Add Price"
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
