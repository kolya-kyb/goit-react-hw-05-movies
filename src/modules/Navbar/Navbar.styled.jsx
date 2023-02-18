import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  padding-bottom: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid black;
`;
