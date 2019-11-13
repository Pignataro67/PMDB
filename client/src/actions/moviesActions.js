// export function fetchGoals() {
//   return (dispatch) => {
//     dispatch({ type: "LOADING_GOALS"});
//     return fetch('/api/goals.json')
//       .then(response => response.json())
//       .then(goals => dispatch({type: "FETCH_GOALS", payload: goals }))
//   }
// }

const goalURL = "/api/goals";
export function fetchGoals() {
  return (dispatch) => {
    dispatch({type: "LOADING_GOALS"})
      return fetch(goalURL)
      .then(response => response.json())
      .then(goals => dispatch({type: 'FETCH_GOALS', payload: goals}))
  }
}
