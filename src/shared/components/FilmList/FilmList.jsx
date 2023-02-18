import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';
import { FilmCard, FilmCardList } from './FilmList.styled';

import { getImageUrl } from 'shared/Api/Api';

const FilmList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, name, poster_path }) => (
    <FilmCard key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? getImageUrl(poster_path, 'original')
              : 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
          }
          alt=""
        />
      </Link>
      <div>{title ? title : name}</div>
    </FilmCard>
  ));

  return <FilmCardList>{elements}</FilmCardList>;
};

export default FilmList;

FilmList.propTypes = {
  items: PropTypes.array.isRequired,
};
