import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails, getImageUrl } from '../../shared/Api/Api';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const [img, setImg] = useState('');
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [dateRelease, setDateRelease] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        // setLoading(true);
        const data = await getMovieDetails(movieId);
        setFilm(() => data);
        setImg(() =>
          data.poster_path
            ? getImageUrl(data.poster_path, 300)
            : 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
        );
        setGenres(() => data.genres);
        setDateRelease(() => {
          const date = new Date(data.release_date);
          return date.getFullYear();
        });
      } catch (error) {
        setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  const createListGenres = items => {
    const elements = items.map(({ id, name }) => <li key={id}> {name}</li>);

    return <ul>{elements}</ul>;
  };
  return (
    <div>
      {error && <div>{error}</div>}
      {!error && (
        <div>
          <h2>
            tittle{film.title} {dateRelease}
          </h2>

          <img src={img} alt="" />
          <div> {createListGenres(genres)}</div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
