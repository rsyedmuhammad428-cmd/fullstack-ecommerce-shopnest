const express = require('express');
const router = express.Router();
const { adminLogin, getAllOrders, updateOrderStatus, getStats, getAllUsers } = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');

// @route   POST api/admin/login
// @desc    Admin login
// @access  Public
router.post('/login', adminLogin);

// @route   GET api/admin/orders
// @desc    Get all orders
// @access  Private (Admin only)
router.get('/orders', adminAuth, getAllOrders);

// @route   PUT api/admin/orders/:id
// @desc    Update order status
// @access  Private (Admin only)
router.put('/orders/:id', adminAuth, updateOrderStatus);

// @route   GET api/admin/stats
// @desc    Get total orders, users, products
// @access  Private (Admin only)
router.get('/stats', adminAuth, getStats);

// @route   GET api/admin/users
// @desc    Get all users
// @access  Private (Admin only)
router.get('/users', adminAuth, getAllUsers);

module.exports = router;