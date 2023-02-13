export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const removeFromFavouriteAction = (fav) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: fav,
});

export const addToFavouriteAction = (fav) => ({
  type: ADD_TO_FAVOURITE,
  payload: fav,
});

// export const removeFromFavouriteAction = (fav) => {
//       return {
//     type: REMOVE_FROM_FAVOURITE,
//     payload: fav,
//       };
//   };

export const getJobsActionAsync = (query) => {
  return async (dispatch, getState) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      let res = await fetch(baseEndpoint + query + "&limit=20");
      if (res.ok) {
        let fetchedJobs = await res.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs,
        });
      } else {
        alert("There has been an error fetching jobs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
