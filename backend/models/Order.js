const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.Mixed },
    title: { type: String },
    price: { type: mongoose.Schema.Types.Mixed },
    qty: { type: mongoose.Schema.Types.Mixed },
    image: { type: String }
  }],
  totalAmount: { type: mongoose.Schema.Types.Mixed },
  paymentMethod: { type: String, default: 'Cash / DM' },
  status: { type: String, default: 'Pending' },
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
