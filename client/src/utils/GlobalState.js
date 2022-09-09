import React, { createContext, useContext } from "react";
import { useMovieReducer } from './reducers';

const FantinderContext = createContext();
const { Provider } = FantinderContext;

const FantinderProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useMovieReducer({
      likedMovies: [],  // array of movies that were liked
      dislikedMovies: [],  // array of movies that were disliked
      movies: []  // array of all movies
    });
    console.log({state}); // comment this in to test!
    return <Provider value={[state, dispatch]} {...props} />;
  };

const useFantinderContext = () => {
    return useContext(FantinderContext);
};

export { FantinderProvider, useFantinderContext };
