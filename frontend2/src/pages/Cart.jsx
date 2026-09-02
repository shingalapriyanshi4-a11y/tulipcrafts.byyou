import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const priceStr = item.product.price.replace(/[^0-9.]/g, '');
    const price = parseFloat(priceStr) || 0;
    return sum + (price * item.qty);
  }, 0);

  const getImgUrl = (path) => path.startsWith('uploads/') ? `https://tulipcrafts-byyou.onrender.com/${path}` : `/${path}`;

  return (
    <main className="container" style={{padding: '60px 20px', minHeight: '60vh'}}>
      <h1 style={{textAlign: 'center', marginBottom: '40px', color: 'var(--color-text-main)'}}>Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <p style={{fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '30px'}}>Your cart is currently empty.</p>
          <Link to="/category" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto'}}>
          {cartItems.map((item) => (
            <div key={item.product.id} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', border: '1px solid var(--color-cream)', borderRadius: '12px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                {item.product.images && item.product.images.length > 0 && (
                  <img src={getImgUrl(item.product.images[0])} alt={item.product.title} style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px'}} />
                )}
                <div>
                  <h3 style={{margin: '0 0 5px 0', fontSize: '1.1rem'}}>{item.product.title}</h3>
                  <p style={{margin: 0, color: 'var(--color-text-light)'}}>Qty: {item.qty} x {item.product.price.replace(/<[^>]+>/g, '')}</p>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.product.id)}
                style={{background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontWeight: 'bold'}}
              >
                Remove
              </button>
            </div>
          ))}
          
          <div style={{borderTop: '2px solid var(--color-cream)', marginTop: '20px', paddingTop: '20px', textAlign: 'right'}}>
            <h2 style={{margin: '0 0 20px 0'}}>Total: ₹{total}</h2>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '15px'}}>
              <button className="btn btn-outline" onClick={clearCart}>Clear Cart</button>
              <button className="btn btn-primary" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
