import { Link } from 'react-router-dom';

const FilmList = ({ items }) => {
  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>
        {title ? title : name} {id}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default FilmList;
