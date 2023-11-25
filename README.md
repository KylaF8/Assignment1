# Assignment 1 - ReactJS app.

Name: Kyla Franks

## Overview.

In this repository I have my updated and commited progress of my ReactJS movie app, where I have extended the React movie labs created in class. I also have an attached ReadMe file which documents this.

### Features.

+ Three additional static endpoints from TMDB: Top Rated, Trending and Now Playing.
+ Multiple parameterised endpoint: Cast and Related Movies.
+ Extensive linking: The movie details link to the actors in the movie, and clicking on those actors links to their movies.
+ Caching with react query is done on all endpoints.  
+ New filtering option was added: Filter by original language of movie.
+ New Sorting was added: Sort by rating, and sort by rating amount.
+ New Searching added: Search for movies by years.
+ New material UI components were added.
+ Responsive UI layout added.
+ Added Pagination: sliced and split the movies displayed by half so that there would be multiple pages with movies. (Secondary colouring.)
+ Changed "Search Fields" to "Search Movies". 

## API endpoints.

+ Top Rated Movies - /movie/top_rated
+ Trending - /trending/movie/day
+ Now Playing - /movie/now_playing
+ Actors - movie/${id}/credits
+ Similar Movies - /movie/${id}/similar
+ Actor Movie Credits - /person/${actorId}/movie_credits

## Routing.

+/movies - displays all published movies.
+ /movies/topRated - displays all the top rated movies.
+ /movies/trending - displays all the trending movies.
+ /movies/nowPlaying - displays all the now playing movies.
+ /actors/:actorId - displays a certain actor's ID.
+ /actors/:actorId/movies - displays all the main actor IDs in the movie that has been selected.

## Independent learning (If relevant).

+Pagination: https://mui.com/material-ui/react-pagination/

