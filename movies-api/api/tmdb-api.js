import fetch from 'node-fetch';

export const getAltTitles = (movieId) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/alternative_titles?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };

export const getWatchProviders = (movieId) => {
    return fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${process.env.REACT_APP_TMDB_KEY}`
        ).then((response) => {
            if (!response.ok) {
             throw new Error(response.json().message);
        }

        return response.json();
    })
    .catch((error) => {
        throw error;
    })
};

export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
    
  export const getMovie = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
    
    export const getGenres = async () => {
      return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
          process.env.REACT_APP_TMDB_KEY +
          "&language=en-US"
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
    
    export const getMovieImages = async (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getMovieReviews = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then((res) => res.json())
        .then((json) => {

          return json.results;
        });
    };
  
    export const getUpcomingMovies = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
      .then((res) => res.json())
        .then((json) => ({ results: json.results }));
    };
  
  
    export const getTopRatedMovies = () => {
    
      return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getTrendingMovies = () => {
    
      return fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getNowPlayingMovies = () => {
    
      return fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getActors = (id) => {
    
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getSimilarMovies = (id) => {
    
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getActorMovieCredits = (actorId) => {
      return fetch(
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };


    export const getTrailers = async (movieId) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };

    export const getTranslations = async (movieId) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/translations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
    