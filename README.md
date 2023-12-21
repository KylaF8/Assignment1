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

------------------------------------------------------------------------------------------------------------------------------------

# Assignment 2 - Web API.

Name: Kyla Franks

## Features.
 
 + Added 4 new endpoints that can fetch TMDB, all have parameterised URLs.
 + Connected frontend & backend apps so fully integrated, all API endpoints called from frontend to go to Web API.
 + Simple signup & login, also included in the site header.
 + Several routes protected so that they can only be seen once the user logs in.
 + Validation of username and passwords, if wrong then error messages are displayed.

## Setup requirements.


## API Configuration

I created a '.env' file for my webpage with the following variables, before running the API.
______________________
NODE_ENV=development
PORT=8080
HOST=MyHost
mongoDB=MyMongoURL
REACT_APP_TMDB_KEY=MyReactKey
secret=MyJWTSecret
______________________

## API Design

- /movies - displays all published movies.
- /movies/topRated - displays all the top rated movies.
- /movies/trending - displays all the trending movies.
- /movies/nowPlaying - displays all the now playing movies.
- /actors/:actorId - displays a certain actor's ID.
- /actors/:actorId/movies - displays all the main actor IDs in the movie that has been selected.

- This indicates that this path is part of an api |GET| /api
- Gets the movies from the api |GET| /api/movies
- Gets the movie data from TMDB |GET| /api/movies/tmdb
- Gets the data about a specific movie from TMDB |GET| /api/movies/tmdb/movie
- Gets the specific data for that movie id |GET| /api/movies/tmdb/movie/{movieId}
- Gets the alternative titles to a movie |GET| /api/movies/tmdb/movie/{movieId}/getAltTitles
- Gets the Watch Providers for a movie |GET| /api/movies/tmdb/movie/{movieId}/getWatchProviders
- Gets the translations to a movie |GET| /api/movies/tmdb/movie/{movieId}/translations
- Gets the trailer for a movie |GET| /api/movies/tmdb/movie/{movieId}/trailers

## Security and Authentication

Authentication/Security:
- A middleware authentication function which uses JWT--JSON Web Tokens, that performs checks to see if the authorization header is present in the HTTP request, if not it indicates an error of its absence. It also parses the authorization header to extract the JWT. It uses the jwtwebtoken library to verify the authenticity of the JWT.
- If the JWT is succesfully verified then it will decode the payload of the token. It uses the decoded information to look up the user in the database.
- Passwords are encrypted
- Authorization header in frontend API routes, that include an authetication token in the HTTP request

 Protected Routes:
- /reviews/form
- /movies/favorites
- /movies/upcoming
- /reviews/:id
- /movies/:id
- /movies/topRated
- /movies/trending
- /movies/nowPlaying
- /actors/:actorId/movies


## Integrating with React App

The frontend code uses the functions to fetch data from the Express backend, which calls the TMDB API to get information about the requested resource. The Express router endpoint acts as a middleware to handle the request and response between the frontend and the TMDB API.

## Independent learning (if relevant)

<iframe></iframe> To display the trailer on my page, by embedding the video on my movie details page. 
Link: https://www.w3schools.com/html/html_youtube.asp
