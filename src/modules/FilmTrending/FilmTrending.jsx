import { getTrendingFilms } from 'shared/Api/Api';
import { useState, useEffect } from 'react';

import FilmList from 'shared/components/FilmList/FilmList';

const FilmTrending = () => {
  const [items, setItems] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        // setLoading(true);
        const data = await getTrendingFilms();
        // const { results } = data;
        setItems(items => [...items, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  return <FilmList items={items} />;
};

export default FilmTrending;
