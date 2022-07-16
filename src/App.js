import './App.css';
import AddToCart from './components/AddToCart';
import { useContext } from 'react';
import {Store} from './store/Store'
function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { itemsInCart },
  } = state;
  return (
    //create store fodlder with store.js
    //createContext , create reducer fuction
    <div>
      <h1>Hi i am navbar {itemsInCart}</h1>
      <AddToCart />
    </div>
  );
}

export default App;
