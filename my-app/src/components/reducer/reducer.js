const istate = {
  name: "ramesh",
  wish: ["eat", "code"],
};
const reducer = (state =istate, action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  }
  return state;
};
export default reducer;
