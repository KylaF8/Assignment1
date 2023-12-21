import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import { getTrailers } from '../../api/tmdb-frontend-api';

const Trailers = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['trailers', movieId],
    () => getTrailers(movieId)
  );

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Trailers</h1>
      {data.results && data.results.length > 0 ? (
        <>
          <h2>{data.results[0].name}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${data.results[0].key}`}
            title={data.results[0].name}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <p>No trailers available.</p>
      )}
    </div>
  );
};

export default Trailers;
