import { NavLink } from 'react-router-dom';

import items from './items';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default Navbar;
