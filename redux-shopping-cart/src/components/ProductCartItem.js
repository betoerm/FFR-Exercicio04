import React from 'react';

export default ({ product, onRemove }) => (

  <li className="card" key={product.id}>    
    <div className="card-image">
      <img      
        src={require(`../assets/images/${product.image}`)}
        alt={product.name}
      />
    </div>

    <div>
      <span>{product.name}</span>
      <p>{product.price}</p>
    </div>

    <button onClick={() => onRemove(product)}>Remove</button>
  </li>

);
