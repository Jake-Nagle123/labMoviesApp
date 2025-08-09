import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: ((movie: BaseMovieProps) => void);
  removeFromFavourites: ((movie: BaseMovieProps) => void);
  addReview: ((movie: BaseMovieProps, review: Review) => void);
  mustWatch: number[]; // Added Movie_App-Part4 Exercise 4
  addToMustWatch: ((movie: BaseMovieProps ) => void); // Added Movie_App-Part4 Exercise 4
}
const initialContextState: MovieContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addReview: (movie, review) => { movie.id, review },
  mustWatch: [],    // Added Movie_App-Part4 Exercise 4
  addToMustWatch: () => {},     // Added Movie_App-Part4 Exercise 4
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [myReviews, setMyReviews] = useState<Review[]>( [] );
  const [favourites, setFavourites] = useState<number[]>([]);
  const [mustWatch, setMustWatch] = useState<number[]>([]);     // Added Movie_App-Part4 Exercise 4

  // Full Block - Function for updating Must Watch State - Added for Movie_App-Part4 Exercise 4
  const addToMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prevMustWatch) =>{
      if(!prevMustWatch.includes(movie.id)) {
        return [...prevMustWatch, movie.id]
      }
      return prevMustWatch;
    });
  }, []);

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
        return [...prevFavourites, movie.id];
      }
      return prevFavourites;
    });
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
  }, []);

  const addReview = (movie: BaseMovieProps, review: Review) => {
    setMyReviews( {...myReviews, [movie.id]: review} )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,  // Added Movie_App-Part4 Exercise 4
        addToMustWatch, // Added Movie_App-Part4 Exercise 4
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;