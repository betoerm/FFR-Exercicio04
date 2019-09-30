import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Products } from "../api/Products";
import { addToCart } from "../actions";

function Product (item){

    const initialState = {};

    const [product, setProduct ] = useState(initialState);

    useEffect(() => {
        Products.getProductById(item.match.params.id).then(
            result => { setProduct(result) }
        );
    });

    return (        
        <div>                       
            <h1>Details</h1>
            <h3>{ product.title }</h3>
            <img src={product.image && require(`../assets/images/${product.image}`)} 
                alt={product.title} />
            
            <div>
                <p> <strong>Name: </strong> {product.name}</p>
                <p> <strong>Price: </strong> {product.price}</p>
                <p> <strong>Description: </strong> {product.description}</p>

                <button onClick={() => item.addToCart(product)}>
                    Add to Cart
                </button>   
            </div>
            <Link to="/cart">View cart</Link>
        </div>
    )
}

export default connect(
    undefined,
    { addToCart }
  )(Product);
  