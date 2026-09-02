import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#f5f5f5', padding: '60px 20px 20px 20px', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', margin: '0 0 20px 0', fontSize: '2rem', color: 'var(--color-peach)' }}>Tulipcrafts</h2>
          <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '20px' }}>
            Handcrafted pipe-cleaner flowers, bespoke bouquets, and aesthetic gifts made with love. Everlasting beauty for you and your loved ones.
          </p>
          <a href="https://instagram.com/tulipcrafts.byyou" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Follow us on Instagram
          </a>
        </div>

        <div>
          <h3 style={{ borderBottom: '2px solid var(--color-peach-dark)', paddingBottom: '10px', display: 'inline-block', marginBottom: '20px' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li><Link to="/" style={{ color: '#aaa', textDecoration: 'none', transition: '0.2s' }} onMouseOver={e=>e.target.style.color='white'} onMouseOut={e=>e.target.style.color='#aaa'}>Home</Link></li>
            <li><Link to="/category" style={{ color: '#aaa', textDecoration: 'none', transition: '0.2s' }} onMouseOver={e=>e.target.style.color='white'} onMouseOut={e=>e.target.style.color='#aaa'}>Shop All</Link></li>
            <li><Link to="/custom-order" style={{ color: '#aaa', textDecoration: 'none', transition: '0.2s' }} onMouseOver={e=>e.target.style.color='white'} onMouseOut={e=>e.target.style.color='#aaa'}>Custom Orders</Link></li>
            <li><Link to="/cart" style={{ color: '#aaa', textDecoration: 'none', transition: '0.2s' }} onMouseOver={e=>e.target.style.color='white'} onMouseOut={e=>e.target.style.color='#aaa'}>Your Cart</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ borderBottom: '2px solid var(--color-peach-dark)', paddingBottom: '10px', display: 'inline-block', marginBottom: '20px' }}>Stay in the loop</h3>
          <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '15px' }}>Subscribe to get special offers, free giveaways, and updates.</p>
          <div style={{ display: 'flex' }}>
            <input type="email" placeholder="Enter your email" style={{ padding: '12px 15px', borderRadius: '5px 0 0 5px', border: 'none', outline: 'none', width: '100%' }} />
            <button style={{ padding: '12px 20px', background: 'var(--color-peach-dark)', color: 'white', border: 'none', borderRadius: '0 5px 5px 0', cursor: 'pointer', fontWeight: 'bold' }}>Subscribe</button>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'center', borderTop: '1px solid #333', paddingTop: '20px', color: '#666', fontSize: '0.9rem' }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Tulipcrafts.byyou. All rights reserved.</p>
      </div>
    </footer>
  );
}
