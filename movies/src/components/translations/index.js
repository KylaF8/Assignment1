import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import { getTranslations } from '../../api/tmdb-frontend-api';

const Translations = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['translations', movieId],
    () => getTranslations(movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Translations</h1>
      <ul>
        {data.translations.slice(0, 7).map(translation => (
          <li key={translation.iso_3166_1}>
            {translation.name} ({translation.iso_3166_1})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Translations;
