import React, { useState, useEffect } from 'react';
import { Products } from "../api/Products";
import ProductItem from "../components/ProductItem";

export function ProductsView (){
    const [products, setProducts] = useState();

    useEffect(()=> {
        Products.getProducts().then(
            result => {
                setProducts(result);
            }
        );
    });

    return(
        <div>            
            {products.map(item => (
                <ProductItem key={item.id} product={item}></ProductItem>
            ))}            
        </div>
    )



}


