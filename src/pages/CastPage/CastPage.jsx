import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getCast, getImageUrl } from '../../shared/Api/Api';

const CastPage = () => {
  const [cast, setCast] = useState([]);

  //   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        // setLoading(true);
        const data = await getCast(movieId);
        const { cast } = data;
        setCast(() =>
          cast.map(item => {
            return (
              <li key={item.id}>
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
              </li>
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
  }, []);
  return <div> {cast}</div>;
};

export default CastPage;
