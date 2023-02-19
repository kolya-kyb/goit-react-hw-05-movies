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
  const [message, setMessage] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');
  const initialValues = search ? search : ' ';

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchFilms = async () => {
      try {
        setLoading(true);
        const data = await getSearchMovies(search, page);
        if (!data.results.length) {
          setMessage(true);
          return;
        }

        setItems(prevItems => [...prevItems, ...data.results]);
        setMessage(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, [search, page, setLoading, setItems, setError]);

  const onSearchFilms = ({ searchFilm }) => {
    if (search === searchFilm) {
      return;
    }
    setSearchParams({ search: searchFilm, page: 1 });
    setItems([]);
  };

  const loadMore = () => {
    setSearchParams({ search, page: Number(page) + 1 });
  };
  // console.log(searchParams.get('search'));
  return (
    <>
      <SearchForm onSubmit={onSearchFilms} values={initialValues} />
      <FilmList items={items} />
      {message && <p>No result</p>}
      {error && <p>{error}</p>}
      {loading && <Loader />}
      {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
    </>
  );
};

export default FilmSearch;
