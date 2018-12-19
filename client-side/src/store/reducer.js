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
  cart: [],
  orderIndex: 1
}

let cartList = []

function arrayRemove(arr, value) {

   return arr.filter(function(ele){
     if(ele.id != value)
       return ele;
   });

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

    cartList.push(action.order)

    return {
      ...state,
      cartTotal : state.cartTotal += action.order.price,
      cart : cartList,
      pickles : false,
      cheese : false,
      tomato : false,
      lettuce : false,
      extraCheese : false,
      doubleMeat : false,
      mustard : false,
      ketchup : false,
      bacon : false,
      orderIndex : state.orderIndex += 1
    }}
    if(action.type === "REMOVE_FROM_CART") {

      cartList = arrayRemove(cartList, action.value)

      return {
        ...state,
        cart: cartList,
        cartTotal: state.cartTotal - action.price
      }}
    if(action.type === "EMPTY_CART") {

      cartList = []

      return {
        ...state,
        cart: cartList,
        cartTotal: 0
      }}
  return state

}

export default reducer
