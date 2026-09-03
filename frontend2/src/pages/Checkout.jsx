import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', pincode: '', city: ''
  });
  const [showQR, setShowQR] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const total = cartItems.reduce((acc, item) => {
    const priceStr = item.product.price ? item.product.price.toString().replace(/[^0-9.]/g, '') : '0';
    const price = parseFloat(priceStr) || 0;
    return acc + (price * item.qty);
  }, 0);

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const confirmOrder = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return navigate('/');
    }

    const userStr = localStorage.getItem('user');
    if (!userStr) {
      alert("Please login first to place an order!");
      return navigate('/login');
    }

    try {
      const order = {
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.pincode}`,
        items: cartItems.map(item => ({
          productId: item.product.id || 0,
          title: item.product.title || 'Unknown',
          price: parseFloat((item.product.price || '0').toString().replace(/[^0-9.]/g, '')) || 0,
          qty: item.qty || 1
        })),
        totalAmount: total,
        paymentMethod: 'Cash / DM',
        status: 'New Order'
      };

      // Save to database (Admin Panel)
      await axios.post('https://grateful-abundance-production-89ff.up.railway.app/api/orders', order);
      
      // Clear cart
      clearCart();
      setOrderSuccess(true);

      // Notify via Instagram
      // Removed automatic window.open so it doesn't pop up for the customer.
      // Notification to phone requires a backend SMS/Email API integration.

    } catch (err) {
      console.error("Order failed", err);
      alert("Failed to place order. Please try again.");
    }
  };

  if (orderSuccess) {
    return (
      <div style={{padding: '100px 20px', textAlign: 'center', minHeight: '60vh'}}>
        <h1 style={{fontFamily: 'var(--font-heading)', color: 'var(--color-peach-dark)', fontSize: '3rem', marginBottom: '20px'}}>Order Sent! 🎉</h1>
        <p style={{fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '40px'}}>We have received your order request. We will contact you shortly to confirm the details and payment.</p>
        <button onClick={() => navigate('/')} style={btnStyle}>Return to Home</button>
      </div>
    );
  }

  return (
    <div style={{padding: '80px 20px', maxWidth: '1000px', margin: '0 auto'}}>
      <h1 style={{fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '40px', color: 'var(--color-text-main)', textAlign: 'center'}}>Checkout</h1>
      
      <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
        
        {/* Left Side: Form */}
        <div style={{flex: 2, minWidth: '300px'}}>
          <div style={{background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-sm)'}}>
            <h2 style={{fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '25px'}}>Shipping Details</h2>
            <form onSubmit={confirmOrder}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px'}}>
                <input type="text" name="name" placeholder="Full Name" required onChange={handleInputChange} style={inputStyle} />
                <input type="email" name="email" placeholder="Email Address" required onChange={handleInputChange} style={inputStyle} />
              </div>
              <div style={{marginBottom: '20px'}}>
                <input type="tel" name="phone" placeholder="Mobile Number" required onChange={handleInputChange} style={inputStyle} />
              </div>
              <div style={{marginBottom: '20px'}}>
                <textarea name="address" placeholder="Complete Street Address" rows="3" required onChange={handleInputChange} style={{...inputStyle, resize: 'vertical'}} />
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px'}}>
                <input type="text" name="city" placeholder="City" required onChange={handleInputChange} style={inputStyle} />
                <input type="text" name="pincode" placeholder="Pincode" required onChange={handleInputChange} style={inputStyle} />
              </div>
              <button type="submit" style={btnStyle}>Confirm Order & Notify Admin</button>
            </form>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div style={{flex: 1, minWidth: '300px', background: 'var(--color-off-white)', padding: '30px', borderRadius: '20px', height: 'fit-content'}}>
          <h2 style={{fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '25px'}}>Order Summary</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px'}}>
            {cartItems.map((item, i) => (
              <div key={i} style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem'}}>
                <span>{item.qty}x {item.product ? item.product.title : 'Item'}</span>
                <span style={{fontWeight: 'bold'}}>₹{(parseFloat((item.product?.price || '0').toString().replace(/[^0-9.]/g, '')) || 0) * item.qty}</span>
              </div>
            ))}
          </div>
          <div style={{borderTop: '1px solid #ddd', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold'}}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '15px', borderRadius: '10px',
  border: '1px solid #ddd', fontSize: '1rem', outline: 'none',
  background: '#fafafa', boxSizing: 'border-box', fontFamily: 'inherit'
};

const btnStyle = {
  background: 'var(--color-text-main)', color: 'white', border: 'none',
  padding: '15px 30px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1rem',
  cursor: 'pointer', width: '100%', transition: '0.3s'
};
