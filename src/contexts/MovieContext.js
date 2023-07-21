import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);

  // All movies fetch from DB on render
  useEffect(() => fetchAllMovies(), []);

  const fetchAllMovies = async () => {
    let result = await fetch("/api/v1/movies/");
    result = await result.json();
    if (result.status !== "error") {
      setAllMovies(result);
    }
  };

  const getMovieById = async (movieId) => {
    let result = await fetch(`/api/v1/movies/${movieId}`);
    result = await result.json();

    if (result.status !== "error") {
      return result;
    }
  };

  const getAllScreeningsForMovie = async (movieId) => {
    let result = await fetch(`/api/v1/screenings/${movieId}`);
    result = await result.json();
    if (result.status !== "error") {
      // Makes the startTime property into a Date object before returning the result
      result = result.map(screening => ({...screening, startTime: new Date(screening.startTime)}));
      return result;
    }
  };

  const values = {
    allMovies,
    getMovieById,
    getAllScreeningsForMovie,
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
