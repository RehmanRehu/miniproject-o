import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import ConfirmDialog from './ConfirmDialog';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    
  }, []);

  const handleAddProduct = () => setFormVisible(true);
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setFormVisible(true);
  };
  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
    setConfirmVisible(true);
  };
  const handleConfirmDelete = () => {
    setProducts(products.filter(p => p.id !== productToDelete.id));
    setConfirmVisible(false);
  };
  const handleFormClose = () => {
    setFormVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <ProductTable
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      {isFormVisible && (
        <ProductForm
          product={selectedProduct}
          onClose={handleFormClose}
          onSave={(product) => {
            if (product.id) {
              setProducts(products.map(p => p.id === product.id ? product : p));
            } else {
              setProducts([...products, { ...product, id: Date.now() }]);
            }
            handleFormClose();
          }}
        />
      )}
      {isConfirmVisible && (
        <ConfirmDialog
          message="Are you sure you want to delete this product?"
          onConfirm={handleConfirmDelete}
          onCancel={() => setConfirmVisible(false)}
        />
      )}
    </div>
  );
};

export default ProductList;