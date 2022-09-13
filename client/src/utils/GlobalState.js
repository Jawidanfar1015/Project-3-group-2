import React, { createContext, useContext } from "react";
import { useMovieReducer } from './reducers';

const MovieSceneContext = createContext();
const { Provider } = MovieSceneContext;

const MovieSceneProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useMovieReducer({
      likedMovies: [],  // array of movies that were liked
      dislikedMovies: [],  // array of movies that were disliked
      movies: []  // array of all movies
    });
    console.log({state}); // comment this in to test!
    return <Provider value={[state, dispatch]} {...props} />;
  };

const useMovieSceneContext = () => {
    return useContext(MovieSceneContext);
};

export { MovieSceneProvider, useMovieSceneContext };
