import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import { getAltTitles } from '../../api/tmdb-frontend-api';

const AltTitles = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['altTitles', movieId],
    () => getAltTitles(movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Alternative Titles</h1>
      <ul>
        {data.titles.slice(0, 7).map(title => (
          <li key={`${title.iso_3166_1}-${title.title}`}>
            {title.title} ({title.iso_3166_1})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AltTitles;
