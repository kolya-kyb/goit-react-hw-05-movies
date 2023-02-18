import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '65bf756d8028470116d86303f5d05e74',
  },
});

export const getTrendingFilms = async () => {
  const { data } = await instance.get('/trending/all/day');
  return data;
};

export const getMovieDetails = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`);
  return data;
};

export const getImageUrl = (imgName, imgSize) => {
  return ` https://image.tmdb.org/t/p/${imgSize}/${imgName}`;
};

export const getCast = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/credits`);
  return data;
};

export const getMovieReviews = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/reviews`);
  return data;
};

export const getSearchMovies = async (query, page) => {
  const { data } = await instance.get('/search/movie', {
    params: { query, page },
  });
  return data;
};
