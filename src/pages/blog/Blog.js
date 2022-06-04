import './Blog.css';

import { useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';

import { useTheme } from '../../hooks/useTheme';

import React from 'react';

export default function Blog() {
  const { id } = useParams();

  const { mode } = useTheme();

  const URL = `http://localhost:8000/bloglar/${id}`;

  const { data: blog, loading, hata } = useFetch(URL);

  return (
    <div className={`blog ${mode}`}>
      {hata && <p className='error'>{hata}</p>}
      {loading && <p className='loading'>Loading...</p>}
      {blog && (
        <>
          <h2 className='page-title'>{blog.baslik}</h2>
          <p className='time'>{blog.okunmaSuresi}</p>
          <ul>
            {blog.kategoriler.map((kategori) => (
              <li key={kategori}>{kategori}</li>
            ))}
          </ul>
          <p className='info'>{blog.icerik}</p>
        </>
      )}
    </div>
  );
}
