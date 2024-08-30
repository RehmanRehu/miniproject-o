import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductTable from './components/ProductTable';
import Dashboard from './components/Dashboard';
import ProductForm from './components/ProductForm';
import ConfirmDialog from './components/ConfirmDialog';
import Summary from './components/Summary';

const App = () => {
  const handleAddProduct = () => {
    
  };

  return (
    <div>
      <Header onAddProduct={handleAddProduct} />
      <ProductList />
      <ProductTable /> 
      <Dashboard /> 
      <ProductForm /> 
      <ConfirmDialog />
      <Summary /> 
 
    </div>
  );
};

export default App;