import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchBar.css';

import React from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${query}`);
    setQuery('');
  };

  //   useEffect(() => {
  //     if (!query) {
  //       handleSubmit();
  //     }
  //   }, [query]);

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Searching...'
          id='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='ara' onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}
