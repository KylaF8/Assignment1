import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/tmdb-frontend-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import MovieCast from "../components/movieCast";
import SimilarMovies from "../components/similarMovies";
import AltTitles from "../components/altTitles";
import WatchProviders from "../components/watchProviders";
import Trailers from "../components/trailers";
import Translations from "../components/translations";

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <AltTitles movieId={id} />
            <Translations movieId={id} />
            <Trailers movieId={id} />
            <WatchProviders movieId={id} />
            <MovieCast movieId={id} />
            <SimilarMovies movieId={id} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;