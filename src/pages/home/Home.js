import './Home.css';

import { useFetch } from '../../hooks/useFetch';

import React from 'react';
import BlogList from '../../components/BlogList';

export default function Home() {
  const { data, loading, hata } = useFetch('http://localhost:8000/bloglar');

  return (
    <div className='home'>
      {hata && <p className='error'>{hata}</p>}
      {loading && <p className='loading'>Loading...</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
}
