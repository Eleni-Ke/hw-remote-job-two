export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const removeFromFavouriteAction = (fav) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: fav,
});

export const addToFavouriteAction = (fav) => ({
  type: "ADD_TO_FAVOURITE",
  payload: fav,
});

// export const removeFromFavouriteAction = (fav) => {
//       return {
//     type: REMOVE_FROM_FAVOURITE,
//     payload: fav,
//       };
//   };
