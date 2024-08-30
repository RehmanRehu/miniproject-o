import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    description: '',
    price: '',
    currentStockLevel: '',
    reorderLevel: ''
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          SKU:
          <input type="text" name="sku" value={formData.sku} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Current Stock Level:
          <input type="number" name="currentStockLevel" value={formData.currentStockLevel} onChange={handleChange} required />
        </label>
        <label>
          Reorder Level:
          <input type="number" name="reorderLevel" value={formData.reorderLevel} onChange={handleChange} required />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default ProductForm;