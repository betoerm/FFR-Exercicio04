import React, { Suspense, useState, useEffect } from 'react';
import { Products } from "../api/Products";

const ProductItem = React.lazy(() => import ("../components/ProductItem"));

export function ProductsView (){
    const initialState = [];

    const [products, setProducts] = useState(initialState);    

    useEffect(()=> {
        Products.getProducts().then(
            result => { setProducts(result.items) }
        )
    });    

    return(
        <div className="card">            
            <ul>                               
                <Suspense fallback = { <h1>Loading ... </h1>}>
                    {products.map(item => (
                        <div className="card">
                            <ProductItem key={item.id} product={item}></ProductItem>                
                        </div>
                    ))}
                </Suspense>               
            </ul>
        </div>        
    )
}


