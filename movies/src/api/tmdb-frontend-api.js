  //-----------------ASSIGNMENT2-----------------//

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const getAltTitles = async (movieId) => {
  const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${movieId}/getAltTitles`,{
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get',
  })
  return response.json();
};

export const getWatchProviders = async (movieId) => {
  const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${movieId}/getWatchProviders`,{
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get',
  })
  return response.json();
};

export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/discover', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovie = async ({ queryKey }) => {
  const [, idPart] = queryKey;
  const  { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getActors = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/actors`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getTopRatedMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/toprated', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};


export const getNowPlayingMovies = async (page) => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/nowplaying', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getSimilarMovies = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/${id}/similar`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getActorMovieCredits = async (actorId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/actors/${actorId}/moviecredits`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genre', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovieImages = async ({queryKey}) => {
  const [, idPart] = queryKey;
  const  { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/images`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};


export const getUpcomingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovieReviews = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/reviews`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getTrendingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/trending', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};


export const getTrailers = async (movieId) => {
  const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${movieId}/trailers`,{
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get',
  })
  return response.json();
};

export const getTranslations = async (movieId) => {
  const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${movieId}/translations`,{
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get',
  })
  return response.json();
};
