import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>SKU</th>
          <th>Description</th>
          <th>Price</th>
          <th>Current Stock Level</th>
          <th>Reorder Level</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.currentStockLevel}</td>
            <td>{product.reorderLevel}</td>
            <td>
              <button onClick={() => onEdit(product)}>Edit</button>
              <button onClick={() => onDelete(product)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;