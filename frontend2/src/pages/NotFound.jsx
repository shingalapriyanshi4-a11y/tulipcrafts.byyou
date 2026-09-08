import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#fafafa'
    }}>
      <h1 style={{
        fontSize: '6rem',
        color: 'var(--color-peach-dark)',
        fontFamily: 'var(--font-heading)',
        margin: '0 0 10px 0',
        textShadow: '2px 2px 10px rgba(182, 141, 132, 0.2)'
      }}>404</h1>
      
      <h2 style={{
        fontSize: '2rem',
        color: 'var(--color-text-main)',
        margin: '0 0 20px 0',
        fontFamily: 'var(--font-heading)'
      }}>Oops! Page Not Found</h2>
      
      <p style={{
        fontSize: '1.1rem',
        color: 'var(--color-text-light)',
        maxWidth: '500px',
        marginBottom: '40px',
        lineHeight: '1.6'
      }}>
        It looks like you've wandered off the path. The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link to="/" className="btn btn-primary" style={{
        padding: '12px 30px',
        fontSize: '1.1rem',
        borderRadius: '30px',
        boxShadow: '0 4px 15px rgba(182, 141, 132, 0.4)'
      }}>
        Return to Shop
      </Link>
    </main>
  );
}