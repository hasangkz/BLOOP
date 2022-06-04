import './BlogList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function BlogList({ blogs }) {
  const { mode } = useTheme();

  if (blogs.length === 0) {
    return (
      <div className='error'>
        <h1>Error! Could not find...</h1>
      </div>
    );
  }
  return (
    <div className='blog-list'>
      {blogs.map((item) => (
        <div key={item.id} className={`card ${mode}`}>
          {console.log(item.sure)}
          <h3>{item.baslik}</h3>
          <p>{item.sure}</p>
          {item.icerik.length > 50 ? (
            <div>{item.icerik.substring(0, 200)}...</div>
          ) : (
            <div>{item.icerik}</div>
          )}
          <Link to={`blog/${item.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
