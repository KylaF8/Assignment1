import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopRatedMoviesPage from './pages/topRatedMovies';
import TrendingMoviesPage from './pages/trendingMovies';
import NowPlayingMoviesPage from './pages/nowPlayingMovies';
import ActorPage from "./pages/actorPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProtectedRoutes from "./protectedRoutes";
import AuthContextProvider from "./contexts/authContext";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={ <SignUpPage /> } />
        <Route element={<ProtectedRoutes />}>
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
          <Route path="/movies/trending" element={<TrendingMoviesPage />} />
          <Route path="/movies/nowPlaying" element={<NowPlayingMoviesPage />} />
          <Route path="/actors/:actorId/movies" element={<ActorPage />} />
          

          </Route>
        </Routes>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);