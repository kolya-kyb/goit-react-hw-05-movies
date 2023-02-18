// const ReviewsPage = () => {
//   return <h1>revievs</h1>;
// };

// export default ReviewsPage;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieReviews } from '../../shared/Api/Api';
import Loader from 'modules/Loader/Loader';

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
              <li key={item.id}>
                {/* <img
                  src={
                    item.profile_path
                      ? getImageUrl(item.profile_path, 'original')
                      : 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
                  }
                  alt=""
                  width="50px"
                /> */}
                <b>{item.author}</b> content: {item.content}
              </li>
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
    <>
      {message && <div>No comment</div>}
      {reviews.length !== 0 && <div> {reviews}</div>}
      {error && <p>{error}</p>}
      {loading && <Loader />}
    </>
  );
};

export default ReviewsPage;
