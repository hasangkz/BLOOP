import './Create.css';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const history = useHistory();

  const [baslik, setBaslik] = useState('');
  const [icerik, setIcerik] = useState('');
  const [sure, setSure] = useState('');

  const { postData, data, error } = useFetch(
    'http://localhost:8000/bloglar',
    'POST'
  );

  const [yeniKategori, setYeniKategori] = useState('');
  const [kategoriler, setKategoriler] = useState([]);
  const kategoriInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(baslik, icerik, kategoriler, sure);
    postData({ baslik, kategoriler, icerik, sure: sure + ' minute' });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newCategory = yeniKategori.trim();

    if (newCategory && !kategoriler.includes(newCategory)) {
      setKategoriler((oKat) => [...oKat, yeniKategori]);
    }
    setYeniKategori('');
    kategoriInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      history.push('/');
    }
  }, [data]);

  return (
    <div className='create'>
      <h1 className='page-title'>Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Blog Title</span>
          <input
            required
            placeholder='You can start by choosing a good title.'
            type='text'
            value={baslik}
            onChange={(e) => setBaslik(e.target.value)}
          />
        </label>

        <label>
          <span>Blog Categories:</span>
          <div className='categories'>
            <input
              type='text'
              onChange={(e) => setYeniKategori(e.target.value)}
              value={yeniKategori}
              ref={kategoriInput}
            />
            <button onClick={handleAdd} className='btnAdd btn'>
              Add
            </button>
          </div>
        </label>
        <p>
          Categories:
          <span className='list'>
            {' '}
            {kategoriler.map((i) => (
              <em key={i}>{i}, </em>
            ))}
          </span>
        </p>

        <label>
          <span>Blog Contents</span>
          <textarea
            required
            value={icerik}
            rows='10'
            onChange={(e) => setIcerik(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Estimated Reading Time(min)</span>
          <input
            required
            min='1'
            max='1000'
            type='number'
            value={sure}
            onChange={(e) => setSure(e.target.value)}
          />
        </label>
        <button type='submit' className='btn'>
          Create
        </button>
      </form>
    </div>
  );
}
