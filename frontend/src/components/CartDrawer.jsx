import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../data/products';

export default function CartDrawer({ open, onClose }) {
  const { items, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();

  return (
    <div className={`cart-drawer ${open ? 'open' : ''}`} aria-label="Shopping cart drawer">
      <div className="cart-header">
        <div>
          <p className="eyebrow">Your bag</p>
          <h3>Shopping Cart</h3>
        </div>
        <button className="mini-button" onClick={onClose} type="button" aria-label="Close cart">
          ✕
        </button>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/category" onClick={onClose}>Explore collection</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.images[0]} alt={item.title} />
                <div className="cart-item-details">
                  <div>
                    <h4>{item.title}</h4>
                    <p>{formatCurrency(item.price)}</p>
                  </div>
                  <div className="cart-qty-row">
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-item" type="button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>
            <button className="btn btn-primary full-width" type="button" onClick={clearCart}>
              Checkout now
            </button>
          </div>
        </>
      )}
    </div>
  );
}
