import React, { Suspense, useState, useEffect } from 'react';
import { Products } from "../api/Products";
import { async } from 'q';

const ProductItem = React.lazy(() => import ("../components/ProductItem"));

export function ProductsView (){
    const [products, setProducts] = useState();


    async function getProducts(){
        await Products.getProducts().then(
            products => {
                setProducts(products);
            }
        );
    }

    useEffect(()=> {
        getProducts();
    });    

    return(
        <div>            
            <ul>                
                <Suspense fallback = { <h1>Loading ... </h1>}>
                    {products.map(item => (
                            <ProductItem key={item.id} product={item}></ProductItem>                
                    ))}
                </Suspense>
            </ul>
        </div>        
    )
}


