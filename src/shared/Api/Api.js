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
  return ` https://image.tmdb.org/t/p/w${imgSize}/${imgName}`;
};
