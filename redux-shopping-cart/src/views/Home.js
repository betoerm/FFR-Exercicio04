import React, { useState, useEffect } from 'react';
import { Products } from './api/Products';
import { ProductItem } from '../components/ProductItem';


export function Home (){
    const [products, setProducts] = useState();

    useEffect(()=> {
        Products.getProducts().then(
            result => {setProducts(result)}
        );
    });

    return (
        <div>
            <ul>
                {products.map((item) => (
                    <div className="card">
                        <ProductItem key = { item.id } product = { item }/>
                    </div>
                ))}
            </ul>
        </div>
    );
}