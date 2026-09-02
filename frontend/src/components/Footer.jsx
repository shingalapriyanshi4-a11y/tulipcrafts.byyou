import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo footer-logo">Tulipcrafts.byyou</Link>
          <p className="footer-copy">
            Handcrafted floral moments designed to feel personal, warm, and unforgettable.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/category?cat=bouquets">Bouquets</Link></li>
            <li><Link to="/category?cat=flower-pots">Flower Pots</Link></li>
            <li><Link to="/category?cat=single-stems">Single Stems</Link></li>
          </ul>
        </div>

        <div>
          <h4>About</h4>
          <ul>
            <li><Link to="/custom-order">Custom Orders</Link></li>
            <li><Link to="/category">New Arrivals</Link></li>
            <li><a href="https://ig.me/m/tulipcrafts.byyou" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>hello@tulipcrafts.byyou</li>
            <li>+91 98765 43210</li>
            <li>Open daily • 10am–8pm</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Tulipcrafts.byyou</span>
        <span>Crafted with love</span>
      </div>
    </footer>
  );
}
