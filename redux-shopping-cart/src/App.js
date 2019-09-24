import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { ProductsView } from "./views/ProductsView";
import { Store } from "./store";
import Cart from "./views/Cart";
import { CartCounter } from "./components/CartCounter";

const Product = lazy(() => import("./views/Product"));

function App(){
  return(
    <Provider store = { Store }>
      <div>
        <Suspense fallback = { <h1>Loading...</h1> }>
          <h1>Amazing Store</h1>
          <BrowserRouter>
            <div>
              <Link to="/">Home</Link>
              <CartCounter/>
            </div>
            <Route exact path='/' component={ ProductsView}/>
            <Route path='/product/:id' component={Product} />
            <Route path='/cart'   component={Cart} />            
          </BrowserRouter>
        </Suspense>
      </div>      
    </Provider>
  );
}


export default App;