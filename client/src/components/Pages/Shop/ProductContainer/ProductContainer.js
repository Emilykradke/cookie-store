import React from 'react';

function ProductContainer({ children }) {
  return (
      <li className="productContainer">
          {children}
      </li>
  );
}

export default ProductContainer;