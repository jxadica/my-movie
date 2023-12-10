// actions.js
export const addToMovieList = (movie) => {
    return {
      type: 'ADD_TO_MOVIE_LIST',
      payload: movie,
    };
  };
  
  export const saveList = (listName, movieList) => {
    return {
      type: 'SAVE_LIST',
      payload: {
        listName,
        movieList,
      },
    };
  };
  