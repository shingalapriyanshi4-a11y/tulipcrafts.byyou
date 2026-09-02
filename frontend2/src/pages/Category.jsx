import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useLocation, Link } from 'react-router-dom';

export default function Category() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(false); // trigger animation reset
    const searchParams = new URLSearchParams(location.search);
    const cat = searchParams.get('cat') || 'all';
    setFilter(cat);

    const url = cat === 'all' 
      ? 'http://localhost:5000/api/products'
      : `http://localhost:5000/api/products/category/${cat}`;

    axios.get(url)
      .then(res => {
        setProducts(res.data);
        setTimeout(() => setIsLoaded(true), 100);
      })
      .catch(err => console.error(err));
  }, [location.search]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bouquets', name: 'Bouquets' },
    { id: 'flower-pots', name: 'Flower Pots' },
    { id: 'single-stems', name: 'Single Stems' },
    { id: 'custom-gifts', name: 'Custom Gifts' },
    { id: 'flower-card-holder', name: 'Flower Card Holder' },
    { id: 'keychains', name: 'Keychains' },
    { id: 'mobile-covers', name: 'Mobile Covers' },
  ];

  return (
    <main style={{ backgroundColor: '#fafafa', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* Dynamic Style for Animations */}
      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-up.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cat-pill {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 30px;
          text-decoration: none;
          color: #555;
          background: white;
          border: 1px solid #ddd;
          font-weight: bold;
          transition: all 0.3s ease;
          margin-bottom: 10px;
          white-space: nowrap;
        }
        .cat-pill:hover {
          border-color: var(--color-peach-dark);
          color: var(--color-peach-dark);
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .cat-pill.active {
          background: var(--color-peach-dark);
          color: white;
          border-color: var(--color-peach-dark);
          box-shadow: 0 4px 12px rgba(182, 141, 132, 0.4);
        }

        .shop-container {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (max-width: 768px) {
          .shop-container {
            grid-template-columns: 1fr;
          }
          .cat-sidebar {
            display: flex;
            overflow-x: auto;
            padding-bottom: 15px;
            gap: 10px;
            -webkit-overflow-scrolling: touch;
          }
          .cat-sidebar::-webkit-scrollbar {
            height: 4px;
          }
          .cat-sidebar::-webkit-scrollbar-thumb {
            background: #ddd;
            border-radius: 4px;
          }
          .cat-pill {
            margin-bottom: 0;
          }
        }
      `}</style>

      {/* Aesthetic Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-peach-light) 0%, #fdfbfb 100%)',
        padding: '15px 20px',
        textAlign: 'center',
        marginBottom: '30px',
        borderBottom: '1px solid #eee'
      }}>
        <h1 style={{ 
          fontSize: '2.2rem', 
          color: 'var(--color-text-main)', 
          fontFamily: 'var(--font-heading)',
          margin: 0,
          textTransform: 'capitalize'
        }}>
          {filter === 'all' ? 'Our Collection' : filter.replace('-', ' ')}
        </h1>
        <p style={{ color: 'var(--color-text-light)', marginTop: '10px', fontSize: '1.1rem' }}>
          Handcrafted with love, just for you.
        </p>
      </div>
      
      <div className="shop-container">
        
        {/* Modern Sidebar (Sticky) */}
        <aside style={{ position: 'sticky', top: '100px', alignSelf: 'start', maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-main)', marginBottom: '20px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            Categories
          </h3>
          <div className="cat-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingRight: '10px' }}>
            {categories.map(c => (
              <Link 
                key={c.id} 
                to={c.id === 'all' ? '/category' : `/category?cat=${c.id}`} 
                className={`cat-pill ${filter === c.id ? 'active' : ''}`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </aside>

        {/* Animated Products Grid */}
        <div className="shop-main">
          {products.length === 0 && isLoaded ? (
            <div style={{ textAlign: 'center', padding: '50px', background: 'white', borderRadius: '15px', border: '1px dashed #ccc' }}>
              <h2 style={{ color: '#888' }}>No products found in this category.</h2>
            </div>
          ) : (
            <div className="products-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
              gap: '30px' 
            }}>
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`fade-in-up ${isLoaded ? 'active' : ''}`} 
                  style={{ transitionDelay: `${index * 50}ms`, height: '100%' }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
