import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import ReviewSection from '../components/ReviewSection';

export default function Home() {
  const [bestsellers, setBestsellers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://grateful-abundance-production-89ff.up.railway.app/api/products')
      .then(res => {
        const best = res.data.filter(p => p.bestseller).slice(0, 4);
        // If no bestsellers explicitly marked, just take the first 4
        setBestsellers(best.length > 0 ? best : res.data.slice(0, 4));
        setTimeout(() => setIsLoaded(true), 100);
      })
      .catch(err => { console.error(err); setError(true); setIsLoaded(true); });
  }, []);

  const getImgUrl = (path) => path.startsWith('uploads/') ? `https://grateful-abundance-production-89ff.up.railway.app/${path}` : `/${path}`;

  return (
    <main>
      <style>{`
        .hero-section {
          position: relative;
          height: 80vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/bouquet-elegant-pink.png') center/cover no-repeat;
          color: white;
          overflow: hidden;
        }
        .hero-content {
          z-index: 2;
          padding: 0 20px;
          max-width: 800px;
          animation: fadeInUp 1s ease-out forwards;
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          margin-bottom: 20px;
          color: white;
          text-shadow: 0 4px 15px rgba(0,0,0,0.5);
          line-height: 1.1;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }
        .btn-shop-now {
          display: inline-block;
          background: white;
          color: var(--color-text-main);
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: bold;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        .btn-shop-now:hover {
          background: var(--color-peach-light);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }



        /* Features */
        .features-banner {
          background: var(--color-peach-light);
          padding: 50px 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          text-align: center;
          color: var(--color-text-main);
        }
        .feature-item h4 {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          margin-bottom: 10px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        {/* If background image is missing, we use a solid fallback in the CSS gradient */}
        <div className="hero-content">
          <h1 className="hero-title">Handcrafted Elegance</h1>
          <p className="hero-subtitle">Discover our premium collection of everlasting pipe-cleaner flowers, custom bouquets, and aesthetic gifts made just for you.</p>
          <Link to="/category" className="btn-shop-now">Shop The Collection</Link>
        </div>
      </section>



      {/* Best Sellers Section */}
      <section className="section container" style={{ padding: '80px 20px' }}>
        <div className="section-header text-center" style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-text-main)' }}>Trending Now</h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--color-peach-dark)', margin: '15px auto' }}></div>
        </div>
        
        <div className="products-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
          gap: '30px' 
        }}>
          {bestsellers.map((product, index) => (
            <div key={product.id} style={{ 
              height: '100%',
              opacity: isLoaded ? 1 : 0, 
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.6s ease-out ${index * 0.1}s` 
            }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{marginTop: '60px'}}>
          <Link to="/category" className="btn btn-outline" style={{ 
            padding: '12px 35px', 
            borderRadius: '30px', 
            border: '2px solid var(--color-peach-dark)', 
            color: 'var(--color-peach-dark)',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: '0.3s'
          }}
          onMouseOver={(e) => { e.target.style.background = 'var(--color-peach-dark)'; e.target.style.color = 'white'; }}
          onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--color-peach-dark)'; }}
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Features Banner */}
      <section className="features-banner">
        <div className="feature-item">
          <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>âœ¨</div>
          <h4>Handmade with Love</h4>
          <p>Every single petal is crafted by hand to ensure unique, premium quality.</p>
        </div>
        <div className="feature-item">
          <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>ðŸŽ¨</div>
          <h4>Fully Customizable</h4>
          <p>Choose your favorite colors and designs to match your aesthetic.</p>
        </div>
        <div className="feature-item">
          <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>ðŸŒ·</div>
          <h4>Everlasting Beauty</h4>
          <p>Unlike real flowers, our pipe-cleaner bouquets stay beautiful forever.</p>
        </div>
      </section>

    </main>
  );
}

