'use client';

import styles from './page.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const response = await fetch('https://cat-app-back-end.herokuapp.com/cats')
      const returnedCats = await response.json()
      setCats(returnedCats);
    }
    getCats();
  }, []);

  return (
    <main className={styles.main}>
      <h1> Hello React </h1>
      {
        cats.map(cat => (
          <h2 key={ cat._id }> { cat.name }</h2>
        ))
      }
    </main>
  )
}
