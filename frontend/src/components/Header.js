import React from 'react';

const Header = ({ onAddProduct }) => {
  return (
    <header>
      <h1>Product Management</h1>
      <button onClick={onAddProduct}>Add Product</button>
    </header>
  );
};

export default Header;