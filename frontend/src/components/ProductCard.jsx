import { Link } from 'react-router-dom';
import { formatCurrency } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-photo" aria-label={`View details for ${product.title}`}>
        <img src={product.images[0]} alt={product.title} />
        {product.tag && <span className="product-tag">{product.tag}</span>}
      </Link>

      <div className="product-info">
        <div className="product-meta">
          <span>{product.category.replace('-', ' ')}</span>
          <span>{product.rating} ★</span>
        </div>
        <h3>{product.title}</h3>
        <div className="price-row">
          <span className="product-price">{formatCurrency(product.price)}</span>
          {product.originalPrice && (
            <span className="old-price">{formatCurrency(product.originalPrice)}</span>
          )}
        </div>

        <button type="button" className="btn btn-secondary full-width" onClick={() => addToCart(product, 1)}>
          Add to Bag
        </button>
      </div>
    </article>
  );
}
