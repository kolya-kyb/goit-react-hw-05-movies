import { LinkStyled, MenuList } from './Navbar.styled';

import items from './items';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <LinkStyled to={link}>{text}</LinkStyled>
    </li>
  ));

  return <MenuList>{elements}</MenuList>;
};

export default Navbar;
