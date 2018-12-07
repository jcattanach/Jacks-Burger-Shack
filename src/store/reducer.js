const initialState = {
  pickles : true,
  cheese : true,
  tomato : true,
  lettuce : true
}

const reducer = (state = initialState,action) => {

  if(action.type === "TOGGLE_LETTUCE") {
    const doesShow = state.lettuce
    return {
      ...state,
      lettuce : !doesShow
    }}
  if(action.type === "TOGGLE_PICKLES") {
      const doesShow = state.pickles
    return {
      ...state,
      pickles : !doesShow
    }}
  if(action.type === "TOGGLE_TOMATO") {
    const doesShow = state.tomato
    return {
      ...state,
      tomato : !doesShow
    }}
  if(action.type === "TOGGLE_CHEESE") {
    const doesShow = state.cheese
    return {
      ...state,
      cheese : !doesShow
    }}

  return state
}

export default reducer
