import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails, getImageUrl } from '../../shared/Api/Api';

import BackLink from 'modules/BackLink/BackLink';
import Loader from 'modules/Loader/Loader';

import {
  Wrapper,
  TitleWrapper,
  MovieInfoWrapper,
  GenresWrapper,
  AdditionalInfoWrapper,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from || '/';

  const [film, setFilm] = useState({});
  const [img, setImg] = useState('');
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateRelease, setDateRelease] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setFilm(() => data);
        setImg(() =>
          data.poster_path
            ? getImageUrl(data.poster_path, 'original')
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
        setLoading(false);
      }
    };
    fetchFilms();
  }, [movieId]);

  const createListGenres = items => {
    const elements = items.map(({ id, name }) => <li key={id}> {name}</li>);

    return <ul>{elements}</ul>;
  };
  return (
    <Wrapper>
      {error && <p>{error}</p>}
      {loading && <Loader />}
      <BackLink to={backLinkHref}>Back</BackLink>
      {Boolean(film) ? (
        <>
          <TitleWrapper>
            <h2>
              {film.title} {dateRelease}
            </h2>
          </TitleWrapper>

          <p>User Score: {film.vote_average}</p>
          <MovieInfoWrapper>
            <img src={img} alt={film.title} width="100px" />
            <p>{film.overview}</p>
          </MovieInfoWrapper>

          <GenresWrapper> {createListGenres(genres)}</GenresWrapper>
        </>
      ) : (
        <p>No result</p>
      )}
      <AdditionalInfoWrapper>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={`/movies/${movieId}/cast`}
              state={{ from: backLinkHref }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              state={{ from: backLinkHref }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </AdditionalInfoWrapper>
    </Wrapper>
  );
};

export default MovieDetailsPage;
