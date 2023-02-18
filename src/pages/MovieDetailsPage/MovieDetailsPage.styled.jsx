import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-right: 10px;
  }
`;
export const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 20px;

  img {
    width: 300px;
    height: 450px;
    object-fit: cover;
    margin-right: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const GenresWrapper = styled.div`
  margin-bottom: 20px;

  ul {
    display: flex;
    list-style: none;
    gap: 10px;
    padding: 0;
    margin: 0;

    li {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export const AdditionalInfoWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 25px;

    li {
      margin-right: 20px;
    }

    a {
      font-size: 16px;
      color: #000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
