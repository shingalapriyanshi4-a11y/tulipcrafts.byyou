import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const getImgUrl = (path) => path.startsWith('uploads/') ? `https://tulipcrafts-byyou.onrender.com/${path}` : `/${path}`;

  return (
    <Link 
      to={`/product/${product.id}`} 
      style={{
        textDecoration: 'none', 
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        background: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        height: '100%',
        boxShadow: isHovered ? '0 12px 25px rgba(0,0,0,0.1)' : '0 4px 10px rgba(0,0,0,0.03)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        position: 'relative',
        border: '1px solid #f2f2f2'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Optional Badge */}
      {product.bestseller && (
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          background: 'var(--color-peach-dark)',
          color: 'white',
          padding: '5px 12px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          zIndex: 2,
          textTransform: 'uppercase'
        }}>
          Best Seller
        </div>
      )}

      <div style={{ 
        width: '100%', 
        aspectRatio: '4/5', 
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        position: 'relative'
      }}>
        {product.images && product.images.length > 0 ? (
          <img 
            src={getImgUrl(product.images[0])} 
            alt={product.title} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)'
            }}
          />
        ) : (
          <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc'}}>No Image</div>
        )}
        
        {/* Quick View / Add to Cart Overlay Button */}
        <div style={{
          position: 'absolute',
          bottom: isHovered ? '15px' : '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
          background: 'rgba(255,255,255,0.95)',
          color: 'var(--color-text-main)',
          textAlign: 'center',
          padding: '12px 0',
          borderRadius: '30px',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          View Details
        </div>
      </div>

      <div style={{ 
        padding: '20px 15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
      }}>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '1.1rem',
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text-main)',
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.title}
        </h3>
        <div style={{
          fontSize: '1.1rem',
          color: 'var(--color-peach-dark)',
          fontWeight: '700',
          marginTop: 'auto',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {product.price.replace(/<br\s*\/?>/gi, ' / ').replace(/<[^>]+>/g, '')}
        </div>
      </div>
    </Link>
  );
}
