import React from 'react';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

function App() {
  return (
    <div className="App">      
      <ul>
        <li><Link to="/">Home</Link></li>      
        <li><Link to="/views/ProductsList">Products</Link></li>      
      </ul>      

      <ApplicationRoutes/>  
    </div>
    
  );
}

export default App;
