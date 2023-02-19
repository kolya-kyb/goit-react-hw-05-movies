import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getCast, getImageUrl } from '../../shared/Api/Api';
// import Loader from 'modules/Loader/Loader';

import { CastCard, CastCardList } from './CastPage.style';

const CastPage = () => {
  const [cast, setCast] = useState([]);

  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        // setLoading(true);
        const data = await getCast(movieId);

        const { cast } = data;
        if (!cast.length) {
          setMessage(true);
          return;
        }
        setCast(() =>
          cast.map(item => {
            return (
              <CastCard key={item.id}>
                <img
                  src={
                    item.profile_path
                      ? getImageUrl(item.profile_path, 'original')
                      : 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
                  }
                  alt=""
                  width="50px"
                />
                {item.name} chracter: {item.character}
              </CastCard>
            );
          })
        );
      } catch (error) {
        setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {error && <p>{error}</p>}
      {/* {loading && <Loader />} */}
      {message && <p>No cast information available for this movie</p>}
      <CastCardList>{cast}</CastCardList>
    </>
  );
};

export default CastPage;
