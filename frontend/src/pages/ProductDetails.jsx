import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { formatCurrency, products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Classic');
  const [selectedColor, setSelectedColor] = useState('Blush');
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(true);
  const [isCareOpen, setIsCareOpen] = useState(false);

  const product = useMemo(
    () => products.find((item) => item.id === Number(id)),
    [id]
  );

  const relatedProducts = useMemo(
    () => products.filter((item) => item.category === product?.category && item.id !== product?.id).slice(0, 3),
    [product]
  );

  if (!product) {
    return <div className="container loading-state">Product not found.</div>;
  }

  const shareOrderMessage = () => {
    const message = `Hello Tulipcrafts! 🌷\nI would like to order:\n\nProduct: ${product.title}\nVariant: ${selectedSize} / ${selectedColor}\nQuantity: ${quantity}\nPrice: ${formatCurrency(product.price * quantity)}\n\nPlease let me know the payment and delivery details.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(message).then(() => {
        window.open('https://ig.me/m/tulipcrafts.byyou', '_blank', 'noopener,noreferrer');
      });
      return;
    }

    window.open('https://ig.me/m/tulipcrafts.byyou', '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="product-page">
      <div className="container product-layout">
        <div className="product-gallery">
          {product.images.map((image, index) => (
            <img key={`${product.id}-${index}`} src={image} alt={`${product.title} ${index + 1}`} />
          ))}
        </div>

        <div className="product-summary">
          <p className="eyebrow">{product.tag}</p>
          <h1>{product.title}</h1>

          <div className="product-rating-row">
            <span>{product.rating} ★★★★★</span>
            <span>{product.reviews} reviews</span>
          </div>

          <div className="price-stack">
            <strong>{formatCurrency(product.price)}</strong>
            <span>{formatCurrency(product.originalPrice)}</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="option-group">
            <label>Choose size</label>
            <div className="pill-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={selectedSize === size ? 'active' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <label>Choose colour</label>
            <div className="pill-options">
              {product.palette.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={selectedColor === color ? 'active' : ''}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-row">
            <span>Quantity</span>
            <div className="quantity-selector">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>-</button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity((current) => current + 1)}>+</button>
            </div>
          </div>

          <div className="purchase-actions">
            <button type="button" className="btn btn-primary" onClick={() => addToCart(product, quantity)}>
              Add to bag
            </button>
            <button type="button" className="btn btn-secondary" onClick={shareOrderMessage}>
              Order on Instagram
            </button>
          </div>

          <div className="detail-accordion">
            <div className="accordion-item">
              <button type="button" onClick={() => setIsDeliveryOpen((current) => !current)}>
                <span>Delivery info</span>
                <span>{isDeliveryOpen ? '−' : '+'}</span>
              </button>
              {isDeliveryOpen && (
                <div className="accordion-content">
                  <p>Complimentary shipping above ₹1,999. Handmade pieces are dispatched within 2–4 days and typically arrive in 3–5 business days.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button type="button" onClick={() => setIsCareOpen((current) => !current)}>
                <span>Care guidance</span>
                <span>{isCareOpen ? '−' : '+'}</span>
              </button>
              {isCareOpen && (
                <div className="accordion-content">
                  <p>Keep away from direct sunlight, avoid water contact, and use a soft dry brush for gentle care. The beauty is designed to last beautifully with occasional dusting.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="container section related-section">
        <div className="section-heading narrow">
          <p className="eyebrow">You may also like</p>
          <h2>More handcrafted favourites</h2>
        </div>

        <div className="products-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
