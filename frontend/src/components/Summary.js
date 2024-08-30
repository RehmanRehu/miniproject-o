import React from 'react';

const Summary = ({ totalProducts, totalStockValue, productsBelowReorderLevel }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Products: {totalProducts}</p>
      <p>Total Stock Value: ${totalStockValue.toFixed(2)}</p>
      <p>Products Below Reorder Level: {productsBelowReorderLevel}</p>
    </div>
  );
};

export default Summary;