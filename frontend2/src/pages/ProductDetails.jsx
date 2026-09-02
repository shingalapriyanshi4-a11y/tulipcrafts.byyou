import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [accordionOpen, setAccordionOpen] = useState({ delivery: false, care: false });
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0); // Always ensure top scroll on mount
    axios.get(`https://tulipcrafts-byyou.onrender.com/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, qty);
    navigate('/cart');
  };

  const getImgUrl = (path) => path.startsWith('uploads/') ? `https://tulipcrafts-byyou.onrender.com/${path}` : `/${path}`;

  if (!product) return <div style={{padding: '100px 20px', textAlign: 'center', fontSize: '1.2rem', color: '#888'}}>Loading beautiful things...</div>;

  return (
    <>
      <style>{`
        .pdp-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 80px 40px;
          max-width: 1300px;
          margin: 0 auto;
        }
        .pdp-image-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .pdp-main-img-container {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          position: relative;
        }
        .pdp-main-img {
          width: 100%;
          height: auto;
          max-height: 700px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .pdp-main-img:hover {
          transform: scale(1.03);
        }
        
        .pdp-details-col {
          padding-top: 20px;
          display: flex;
          flex-direction: column;
        }
        .pdp-title {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          color: var(--color-text-main);
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .pdp-price {
          font-size: 1.8rem;
          color: var(--color-peach-dark);
          font-weight: 700;
          margin-bottom: 5px;
        }
        .pdp-tax-note {
          font-size: 0.95rem;
          color: var(--color-text-light);
          margin-bottom: 30px;
        }
        
        .pdp-desc {
          font-size: 1.15rem;
          color: var(--color-text-main);
          line-height: 1.8;
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid var(--color-cream);
        }
        
        .pdp-custom-box {
          background: var(--color-off-white);
          border: 1px solid var(--color-cream);
          border-left: 4px solid var(--color-peach-dark);
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .pdp-custom-box p {
          margin: 0;
          color: var(--color-text-main);
          font-weight: 600;
          font-size: 1rem;
        }
        
        .pdp-qty-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }
        .pdp-qty-label {
          font-weight: bold;
          color: var(--color-text-main);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pdp-qty-control {
          display: flex;
          align-items: center;
          border: 2px solid var(--color-cream);
          border-radius: 50px;
          overflow: hidden;
        }
        .pdp-qty-btn {
          width: 45px;
          height: 45px;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          color: var(--color-text-main);
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pdp-qty-btn:hover {
          background: var(--color-off-white);
        }
        .pdp-qty-input {
          width: 50px;
          height: 45px;
          border: none;
          text-align: center;
          font-size: 1.2rem;
          font-weight: bold;
          background: transparent;
          color: var(--color-text-main);
        }
        
        .pdp-add-btn {
          width: 100%;
          background: var(--color-text-main);
          color: white;
          border: none;
          padding: 20px;
          font-size: 1.1rem;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .pdp-add-btn:hover {
          background: var(--color-peach-dark);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .pdp-accordion {
          margin-top: 50px;
          border-top: 1px solid var(--color-cream);
        }
        .pdp-acc-item {
          border-bottom: 1px solid var(--color-cream);
        }
        .pdp-acc-header {
          padding: 25px 0;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pdp-acc-title {
          font-size: 1.1rem;
          font-weight: bold;
          color: var(--color-text-main);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pdp-acc-icon {
          font-size: 1.8rem;
          color: var(--color-peach-dark);
          transition: transform 0.3s ease;
          line-height: 1;
        }
        .pdp-acc-content {
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        .pdp-acc-content p {
          color: var(--color-text-main);
          line-height: 1.8;
          margin: 0 0 25px 0;
          padding-right: 20px;
        }
        .pdp-acc-content p span {
          display: block;
          margin-bottom: 10px;
        }

        @media (max-width: 992px) {
          .pdp-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 20px;
          }
          .pdp-title {
            font-size: 2.2rem;
          }
          .pdp-main-img {
            max-height: 500px;
          }
        }
      `}</style>
      
      <main className="pdp-container">
        
        <div className="pdp-image-col fade-in-up">
          <div className="pdp-main-img-container">
            {product.images && product.images.length > 0 ? (
              <img src={getImgUrl(product.images[0])} alt={product.title} className="pdp-main-img" />
            ) : (
              <div style={{height: '500px', display:'flex', alignItems:'center', justifyContent:'center', background:'#eee'}}>No Image</div>
            )}
          </div>
        </div>

        <div className="pdp-details-col fade-in-up" style={{animationDelay: '0.1s'}}>
          <h1 className="pdp-title">{product.title}</h1>
          <div className="pdp-price">{product.price.replace(/<br\s*\/?>/gi, ' / ').replace(/<[^>]+>/g, '')}</div>
          <div className="pdp-tax-note">Inclusive of all taxes</div>
          
          <div className="pdp-desc">{product.desc}</div>

          <div className="pdp-custom-box">
            <span style={{fontSize: '1.5rem'}}>✨</span>
            <p>Customize in your favourite colour and style!</p>
          </div>

          <div className="pdp-qty-row">
            <span className="pdp-qty-label">Quantity</span>
            <div className="pdp-qty-control">
              <button className="pdp-qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <input type="text" className="pdp-qty-input" value={qty} readOnly />
              <button className="pdp-qty-btn" onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <button className="pdp-add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <div className="pdp-accordion">
            <div className="pdp-acc-item">
              <div className="pdp-acc-header" onClick={() => setAccordionOpen({...accordionOpen, delivery: !accordionOpen.delivery})}>
                <h3 className="pdp-acc-title">Delivery Information</h3>
                <span className="pdp-acc-icon" style={{transform: accordionOpen.delivery ? 'rotate(45deg)' : 'rotate(0)'}}>{accordionOpen.delivery ? '+' : '+'}</span>
              </div>
              <div className="pdp-acc-content" style={{maxHeight: accordionOpen.delivery ? '500px' : '0', paddingBottom: accordionOpen.delivery ? '20px' : '0'}}>
                <p>
                  <span>✓ All orders are handcrafted with love and care.</span>
                  <span>✓ Please allow 2-4 days for making and processing.</span>
                  <span>✓ Shipping takes an additional 3-5 business days.</span>
                  <span>✓ You will receive a tracking ID via Instagram DM once dispatched.</span>
                </p>
              </div>
            </div>
            
            <div className="pdp-acc-item">
              <div className="pdp-acc-header" onClick={() => setAccordionOpen({...accordionOpen, care: !accordionOpen.care})}>
                <h3 className="pdp-acc-title">Product Care</h3>
                <span className="pdp-acc-icon" style={{transform: accordionOpen.care ? 'rotate(45deg)' : 'rotate(0)'}}>{accordionOpen.care ? '+' : '+'}</span>
              </div>
              <div className="pdp-acc-content" style={{maxHeight: accordionOpen.care ? '500px' : '0', paddingBottom: accordionOpen.care ? '20px' : '0'}}>
                <p>
                  <span>✓ Keep away from direct sunlight to prevent fading.</span>
                  <span>✓ Do not wash or submerge in water.</span>
                  <span>✓ Use a soft dry brush to gently remove dust.</span>
                  <span>✓ Handle with care to maintain the beautiful 3D shape.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
