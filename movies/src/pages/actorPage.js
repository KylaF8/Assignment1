import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getActorMovieCredits } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const ActorPage = () => {
  const { actorId } = useParams();
  const { data, isLoading, isError, error} = useQuery(
    ['actorMovies' , actorId],
    () => getActorMovieCredits(actorId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


const movies = data.cast;


return (
  <PageTemplate
    title="Actor's Movies"
    movies={movies}
    action={(movie) => {
      return <AddToFavoritesIcon movie={movie} />;
    }}
  />
);
};


export default ActorPage;