import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import { getWatchProviders } from '../../api/tmdb-frontend-api';

const WatchProviders = ({ movieId }) => {
    const { data, isLoading, isError, error } = useQuery(
      ['watchProviders', movieId],
      () => getWatchProviders(movieId)
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
          <h1>Watch Providers</h1>
          {data.results && data.results.US && data.results.US.link ? (
            <a
              href={data.results.US.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: clicked ? 'purple' : 'blue',
                textDecoration: 'none',
            }}
            onClick={handleClick}
          >
              Watch on {data.results.US.provider_name}
            </a>
          ) : (
            <p>No watch providers available.</p>
          )}
        </div>
      );
    };
        
        export default WatchProviders;