import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomOrder() {
  const submitCustomOrder = (e) => {
    e.preventDefault();
    const message = `Hello Tulipcrafts! 🌷\nI would like to place a CUSTOM ORDER.\n\nPlease let me know how I can share my ideas or reference pictures with you.`;
    navigator.clipboard.writeText(message).then(() => {
      alert('🎉 Request copied! Paste this message in our Instagram DM.');
      window.open('https://ig.me/m/tulipcrafts.byyou', '_blank');
    });
  };

  return (
    <main style={{padding: '80px 20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
      <h1>Custom Orders</h1>
      <p style={{margin: '20px 0', color: 'var(--color-text-light)'}}>
        Have a special design in mind? We'd love to create it for you! Click the button below to send us a message on Instagram with your ideas.
      </p>
      <button onClick={submitCustomOrder} className="btn btn-primary">Message us on Instagram</button>
      <div style={{marginTop: '40px'}}>
        <Link to="/category" className="btn btn-outline">Back to Shop</Link>
      </div>
    </main>
  );
}
