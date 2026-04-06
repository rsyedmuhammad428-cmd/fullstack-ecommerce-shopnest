const nodemailer = require('nodemailer');

const sendNewOrderEmail = async (order, user, screenshot) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const productsList = order.items.map(item => `• ${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`).join('\n');

    const mailOptions = {
      from: `"ShopNest Store" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sending to admin
      subject: 'New Order Received - ShopNest',
      text: `A new order has been placed.\n\nCustomer: ${order.shippingDetails.fullName} (${user.email})\nTotal: $${order.totalAmount.toFixed(2)}\nPayment Method: ${order.paymentMethod}\nProducts:\n${productsList}\n\nCheck admin dashboard for details.`
    };

    // If there's a screenshot, attach it
    if (screenshot) {
      mailOptions.attachments = [
        {
          filename: 'payment-screenshot.png',
          content: screenshot.split('base64,')[1],
          encoding: 'base64'
        }
      ];
    }

    await transporter.sendMail(mailOptions);
    console.log('Admin notification email sent');
  } catch (err) {
    console.error('Error sending admin notification email:', err);
  }
};

module.exports = { sendNewOrderEmail };