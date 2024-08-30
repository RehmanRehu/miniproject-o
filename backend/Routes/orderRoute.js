const express = require('express')
const {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrderStatus,
    deleteOrder
} = require('../Controllers/orderController')

const router = express.Router();

router.get('/Orders', getAllOrders);
router.get('/Orders', getOrderById);
router.post('/Orders', createOrder);
router.put('/Order/:id', updateOrderStatus);
router.delete('/Order/:id', deleteOrder);

module.exports = router;