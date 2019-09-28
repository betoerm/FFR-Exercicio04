import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Products } from "../api/Products";
import { addToCart } from "../actions";

function Product (item){
    const [product, setProduct ] = useState();

    useEffect(()=>{
        Products.getProductById(item.match.params.id).then(
            result => {setProduct(result)}
        );
    });

    return (        
        <div>                       
            <h1>Details</h1>
            <h3>{ product.title }</h3>
            <img src={product.image && require(`../assets/images/${product.image}`)} 
                alt={product.title} />
            
            <div>
                <p> <strong>name:</strong> {product.name}</p>
                <p> <strong>price:</strong> {product.price}</p>
                <p> <strong>description:</strong> {product.description}</p>
            </div>
            <Link to="/cart">View cart</Link>
        </div>
    )
}

export default connect(
    undefined,
    { addToCart }
  )(Product);
  