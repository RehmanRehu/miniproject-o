const express = require('express')
const {
    getAllSuppliers,
    createSupplier,
    
} = require('../Controllers/productController');
const { createSupplier } = require('../Controllers/supplierController');

const router = express.Router();

router.get('/Supplier', getAllSuppliers);

router.post('/Supplier', createSupplier);


module.exports = router;