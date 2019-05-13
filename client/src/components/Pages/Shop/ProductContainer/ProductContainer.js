import React from 'react';

function ProductContainer(props) {
  return (
      <li className="productContainer">
          <img src={props.image} alt="cookie"/>
          <div className="flavor">{props.flavor}</div>
          <div className="price">{props.price}</div>
      </li>
  );
}

export default ProductContainer;