import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import MovieCard from '../movieCard';
import { getSimilarMovies } from '../../api/tmdb-frontend-api';
import Grid from '@mui/material/Grid';

const SimilarMovies = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['similar', movieId],
    () => getSimilarMovies(movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Related Movies</h2>
      <Grid container spacing={3}>
        {data.results.slice(0, 8).map((movie) => (
          <Grid item key={movie.id} xs={3}>
          <MovieCard movie={movie}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SimilarMovies;
