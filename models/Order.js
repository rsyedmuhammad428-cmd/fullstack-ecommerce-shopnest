const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    name: String,
    price: Number,
    quantity: Number,
    color: String,
    size: String,
    image: String
  }],
  totalAmount: { type: Number, required: true },
  shippingDetails: {
    fullName: String,
    phone: String,
    city: String,
    streetAddress: String
  },
  paymentMethod: { type: String, required: true }, // COD, Easypaisa, BankTransfer
  paymentScreenshot: { type: String }, // Base64 string or image URL
  status: { type: String, default: 'Pending' } // Pending, Shipped
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
