import styled from 'styled-components';

export const CastCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CastCard = styled.li`
  width: calc(16.666% - 10px);
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    display: block;
    margin-bottom: 10px;
    width: 100%;
  }

  p {
    margin: 0;
    text-align: center;
  }
`;
