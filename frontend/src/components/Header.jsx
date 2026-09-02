import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header({ onCartOpen }) {
  const { totalItems } = useCart();

  return (
    <header className="site-header">
      <div className="nav-container container">
        <Link to="/" className="logo">Tulipcrafts.byyou</Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/category">Shop</Link>
          <Link to="/category?cat=bouquets">Collections</Link>
          <Link to="/custom-order">Custom Orders</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/auth" className="header-auth-link">Login</Link>
          <button type="button" className="cart-button" onClick={onCartOpen} aria-label="Open cart">
            Cart
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
