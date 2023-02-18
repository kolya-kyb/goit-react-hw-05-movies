import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieReviews } from '../../shared/Api/Api';
import Loader from 'modules/Loader/Loader';

import {
  Container,
  ReviewCard,
  ReviewList,
  NoComment,
} from './ReviewsPage.styled';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getMovieReviews(movieId);
        const { results } = data;
        if (!results.length) {
          setMessage(true);
          return;
        }
        setReviews(() =>
          results.map(item => {
            return (
              <ReviewCard key={item.id}>
                <p>{item.author}</p> {item.content}
              </ReviewCard>
            );
          })
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <Container>
      {message && <NoComment>No comment</NoComment>}
      {reviews.length !== 0 && <ReviewList> {reviews}</ReviewList>}
      {error && <p>{error}</p>}
      {loading && <Loader />}
    </Container>
  );
};

export default ReviewsPage;
