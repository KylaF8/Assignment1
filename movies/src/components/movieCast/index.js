import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import ActorCard from '../actorCard';
import { getActors } from '../../api/tmdb-api';
import Grid from '@mui/material/Grid';

const MovieCast = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['actors', movieId],
    () => getActors(movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Cast of Movie</h2>
      <Grid container>
        {data.cast.slice(0, 8).map((actor) => (
          <ActorCard key={actor.id} actor={actor}/>
        ))}
      </Grid>
    </div>
  );
};

export default MovieCast;
