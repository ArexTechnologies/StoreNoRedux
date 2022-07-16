import { createContext, useReducer } from "react";
// first this created store needs to be exported
export const Store = createContext();

// now the initial state need to be defined for the cart
const initialState = {
    cart: {
        itemsInCart : 0
    }
}

//now we define a reducer function which takes two parameters
// an initial state and an action

function reducer(state, action) {
    console.log('action just cam here')
    switch (action.type) {
        case 'ADD_TO_CART' :
            return {...state , cart : { itemsInCart : state.cart.itemsInCart + action.payload}}
        default:
            return state
    }
}

//now make an export function as StoreProvider

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }
    return <Store.Provider value={value}>{ props.children}</Store.Provider>
}