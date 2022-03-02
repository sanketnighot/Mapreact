const wishReducer = (state = [], action) => {
  if (action.type === "NAME_CHANGE") {
    return action.payload
  }
  return state
};
export default wishReducer
