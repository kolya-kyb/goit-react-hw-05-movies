import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from './Searchbar/Searchbar';
import Loader from 'modules/Loader/Loader';
import FilmList from 'shared/components/FilmList/FilmList';
import { getSearchMovies } from 'shared/Api/Api';

const FilmSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchFilms = async () => {
      try {
        setLoading(true);
        const data = await getSearchMovies(search, page);
        console.log(search);
        setItems(prevItems => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, [search, page, setLoading, setItems, setError]);

  const onSearchFilms = ({ search }) => {
    setSearchParams({ search, page: 1 });
    setItems([]);
  };

  const loadMore = () => {
    setSearchParams({ search, page: Number(page) + 1 });
  };

  return (
    <>
      <SearchForm onSubmit={onSearchFilms} />
      <FilmList items={items} />
      {error && <p>{error}</p>}
      {loading && <Loader />}
      {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
    </>
  );
};

export default FilmSearch;
