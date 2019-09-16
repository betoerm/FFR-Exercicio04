import React, { useState, useEffect } from 'react';
import { Products } from "../api/Products";

export function ProductsList(){
    const [objProd, setObjProd] = useState([]);

    useEffect(()=>{
        Products.getProducts().then(
            result => {
                setObjProd(result.items);
            }
        )
    });

    return(
        <div>
            <h1>Amazing Redux Store</h1>        

            <div>
                {
                    objProd.map((prods) => {
                        return(
                            <div>
                                <p>prods.id</p>
                                <p>prods.image</p>
                                <p>prods.name</p>
                                <p>prods.price</p>
                            </div>
                        )})
                }
            </div>


        </div>
    );
}