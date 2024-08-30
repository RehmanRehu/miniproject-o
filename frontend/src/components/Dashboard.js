import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import Summary from './Summary';
import { fetchProducts } from '../data/mockData';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or use mock data
    const productsData = fetchProducts();
    setProducts(productsData);
  }, []);

  const lowStockProducts = products.filter(p => p.currentStockLevel <= p.reorderLevel);
  const totalStockValue = products.reduce((acc, product) => acc + (product.price * product.currentStockLevel), 0);

  return (
    <div className="dashboard">
      <Summary
        totalProducts={products.length}
        totalStockValue={totalStockValue}
        productsBelowReorderLevel={lowStockProducts.length}
      />
      <ProductTable products={products} />
    </div>
  );
};

export default Dashboard;