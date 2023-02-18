import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoComment = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ReviewCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  margin: 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: left;
  font-size: 16px;
  line-height: 1.5;
  word-break: break-word;
  overflow: hidden;

  p {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
