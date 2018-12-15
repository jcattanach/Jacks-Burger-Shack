const initialState = {
  pickles : false,
  cheese : false,
  tomato : false,
  lettuce : false,
  extraCheese : false,
  doubleMeat : false,
  mustard : false,
  ketchup : false,
  bacon : false,
  cartTotal : 0,
  itemsInCart : 0,
  cart: []
}

let cartList = []

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

    if( state.cheese){
      return {
        ...state,
        extraCheese : false,
        cheese : !doesShow
      }
    } else {
    return {
      ...state,
      cheese : !doesShow
    }}}
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
  if(action.type === "ADD_TO_CART") {

    if(state.pickles){
      cartList.push('pickles')
    }
    if(state.cheese){
      cartList.push('cheese')
    }
    if(state.tomato){
      cartList.push('tomato')
    }
    if(state.lettuce){
      cartList.push('lettuce')
    }
    if(state.extraCheese){
      cartList.push('extraCheese')
    }
    if(state.doubleMeat){
      cartList.push('doubleMeat')
    }
    if(state.mustard){
      cartList.push('mustard')
    }
    if(state.ketchup){
      cartList.push('ketchup')
    }
    if(state.bacon){
      cartList.push('bacon')
    }

    return {
      ...state,
      cartTotal : state.cartTotal += action.value,
      itemsInCart : state.itemsInCart += 1,
      cart : cartList,
      pickles : false,
      cheese : false,
      tomato : false,
      lettuce : false,
      extraCheese : false,
      doubleMeat : false,
      mustard : false,
      ketchup : false,
      bacon : false
    }}
  return state

}

export default reducer
