const initialState = {
  pickles : false,
  cheese : false,
  tomato : false,
  lettuce : false,
  extraCheese : false,
  doubleMeat : false,
  mustard : false,
  ketchup : false,
  bacon : false
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
  if(action.type === "TOGGLE_EXTRA_CHEESE") {
    const doesShow = state.extraCheese
    return {
      ...state,
      extraCheese : !doesShow
    }}
  if(action.type === "TOGGLE_DOUBLE_MEAT") {
    const doesShow = state.doubleMeat
    return {
      ...state,
      doubleMeat : !doesShow
    }}
  if(action.type === "TOGGLE_MUSTARD") {
    const doesShow = state.mustard
    return {
      ...state,
      mustard : !doesShow
    }}
  if(action.type === "TOGGLE_KETCHUP") {
    const doesShow = state.ketchup
    return {
      ...state,
      ketchup : !doesShow
    }}
  if(action.type === "TOGGLE_BACON") {
    const doesShow = state.bacon
    return {
      ...state,
      bacon : !doesShow
    }}
  return state
}

export default reducer
