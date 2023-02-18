import styled from 'styled-components';

// export const FilmCardList = styled.ul`
//   display: grid;
//   max-width: calc(100vw vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   gap: 16px;
// `;

// export const FilmCard = styled.li`
//   width: 100%;
//   height: 260px;
//   object-fit: cover;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

//   &:hover {
//     transform: scale(1.03);
//     cursor: zoom-in;
//   }
// `;

export const FilmCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

export const FilmCard = styled.li`
  flex-basis: calc(25% - 20px);
  margin: 0 10px 20px;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: translateY(-5px);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  div {
    margin-top: 10px;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;
