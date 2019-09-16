import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { ProductsList } from "./views/ProductsList";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/views/ProductsList" component={ProductsList} />
  </>  
);
