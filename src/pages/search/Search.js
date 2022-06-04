import React from 'react';
import './Search.css';

import BlogList from '../../components/BlogList';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const URL = `http://localhost:8000/bloglar?q=${query}`;
  const { data, loading, hata } = useFetch(URL);
  return (
    <div>
      <h2 className='page-title'>Searched Word: "{query}"</h2>
      {hata && <p className='error'>{hata}</p>}
      {loading && <p className='loading'>Loading...</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
}
