import React, { useContext } from 'react'
import {Store} from '../store/Store.js'
function AddToCart() {
    const { state, dispatch: ctxDispatch } = useContext(Store)
     const {
       cart: { itemsInCart },
     } = state;

    function onClickHandler() {
        ctxDispatch({
            type: 'ADD_TO_CART',
            payload : 5
        })
    }
  return (
    <>
      <button onClick={onClickHandler}>
        {/* onclick this button will dispatch an action to store,which will further increase the amount in cart */}
        <h1> Add to cart</h1>
      </button>
    </>
  );
}

export default AddToCart