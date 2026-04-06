const mongoose = require('mongoose');
const Order = require('../models/Order');
const User = require('../models/User');
const { sendNewOrderEmail } = require('../utils/email');

exports.checkout = async (req, res) => {
  try {
    const { items, totalAmount, shippingDetails, paymentMethod, screenshot } = req.body;
    
    if (items && items.length === 0) {
      return res.status(400).json({ msg: 'No order items' });
    }

    // Mongoose will automatically queue the 'save' operation if the connection is still in state 2 (connecting).
    // This removes the "Database connection down" error during serverless cold starts.

    const order = new Order({
      user: req.user.id,
      items,
      totalAmount,
      shippingDetails,
      paymentMethod,
      paymentScreenshot: screenshot
    });

    const createdOrder = await order.save();

    // Fetch user for email notification
    const user = await User.findById(req.user.id);
    if (user) {
      // Send notification email asynchronously with optional screenshot
      sendNewOrderEmail(createdOrder, user, screenshot);
    }

    res.status(201).json(createdOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
