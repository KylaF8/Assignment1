import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [yearFilter, setYearFilter] = useState("");
  const [sortRating, setSortRating] = useState(false);
  const [languageFilter, setLanguageFilter] = useState("");


  console.log(movies)
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      const movieYear = m.release_date ? m.release_date.substring(0, 4) : "";  
      return yearFilter ? movieYear.includes(yearFilter) : true;
    })
    .filter((m) => {
      return languageFilter ? m.original_language === languageFilter: true;
    });

    if (sortRating) {
      displayedMovies.sort((a,b) => b.vote_average - a.vote_average);
    }
    
  

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "year") setYearFilter(value);
    else if (type === "sortRating") setSortRating(value);
    else if (type === "language") setLanguageFilter(value);


  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            yearFilter={yearFilter}
            sortRating={sortRating}
            languageFilter={languageFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;