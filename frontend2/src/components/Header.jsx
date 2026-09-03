import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [showFakeGoogle, setShowFakeGoogle] = useState(false);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    if (showLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [showLoginModal]);

  return (
    <>
      <style>{`
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 5px 20px;
        }
        .header-nav {
          display: flex; 
          gap: 30px; 
          align-items: center;
        }
        .header-link {
          text-decoration: none; 
          color: var(--color-peach-dark); 
          font-size: 0.9rem; 
          font-weight: bold; 
          letter-spacing: 1px;
        }
        .login-image-col {
          display: block !important;
        }
        @media (max-width: 768px) {
          .header-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 2px;
            padding: 10px 10px;
          }
          .header-nav {
            flex-wrap: nowrap;
            justify-content: flex-end;
            gap: 6px;
          }
          .header-link {
            font-size: 0.65rem;
            letter-spacing: 0px;
          }
          .logo {
            font-size: 0.95rem !important;
            letter-spacing: 0px !important;
          }
          .cart-btn-mobile {
            padding: 5px 8px !important;
            font-size: 0.75rem !important;
          }
          .cart-icon-mobile {
            width: 16px !important;
            height: 16px !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
          .login-image-col {
            display: none !important;
          }
        }
      `}</style>
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        background: 'rgba(255, 255, 255, 0.98)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        display: 'block' 
      }}>
        <div className="header-container">
          <Link to="/" className="logo" style={{ 
            fontFamily: 'var(--font-heading)', 
            color: 'var(--color-peach-dark)',
            textDecoration: 'none',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            Tulipcrafts.byyou
          </Link>
          <nav className="header-nav">
            <Link to="/" className="header-link">HOME</Link>
            <Link to="/category" className="header-link">SHOP</Link>
            
            {(() => {
              const userStr = localStorage.getItem('user');
              if (userStr) {
                const user = JSON.parse(userStr);
                if (user.email && user.email.trim().toLowerCase() === 'shingalapriyanshi4@gmail.com') {
                  return <Link to="/admin" className="header-link" style={{color: 'var(--color-peach-dark)', background: '#fff3f0', padding: '5px 12px', borderRadius: '15px'}}>ADMIN</Link>;
                }
              }
              return null;
            })()}

            {localStorage.getItem('user') ? (
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', background: 'var(--color-off-white)', padding: '5px 15px 5px 5px', borderRadius: '30px', border: '1px solid var(--color-cream)'}} onClick={() => {
                  if(window.confirm('Are you sure you want to log out?')) {
                    localStorage.removeItem('user');
                    window.location.reload();
                  }
                }}>
                  <img 
                    src={JSON.parse(localStorage.getItem('user')).picture} 
                    alt="Profile" 
                    style={{width: '32px', height: '32px', borderRadius: '50%'}} 
                  />
                  <span style={{fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-peach-dark)'}}>
                    {(() => {
                      const name = JSON.parse(localStorage.getItem('user')).name.split(' ')[0];
                      return name.length > 12 ? name.substring(0, 12) + '...' : name;
                    })()}
                  </span>
                </div>
            ) : (
              <button 
                onClick={() => setShowLoginModal(true)} 
                className="header-link" 
                style={{color: 'var(--color-peach-dark)', background: 'none', border: 'none', cursor: 'pointer'}}
              >
                LOGIN
              </button>
            )}
            
            <Link to="/cart" className="cart-btn-mobile" style={{
              textDecoration: 'none',
              fontWeight: 'bold', 
              color: 'var(--color-peach-dark)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '5px',
              padding: '8px 15px',
              borderRadius: '30px',
              border: '1px solid var(--color-cream)'
            }}>
              <svg className="cart-icon-mobile" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span><span className="hide-on-mobile">CART </span>{cartCount > 0 && `(${cartCount})`}</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Login Modal Overlay */}
      {showLoginModal && (
        <div className="login-modal-overlay" onClick={() => setShowLoginModal(false)}>
          
          <div className="login-modal-box" onClick={e => e.stopPropagation()}>
            
            <button 
              onClick={() => setShowLoginModal(false)}
              className="login-modal-close"
            >
              &times;
            </button>

            <h1 className="login-modal-title">
              {isSignupMode ? 'Create New Account' : 'Welcome Back'}
            </h1>
            <p className="login-modal-desc">
              {isSignupMode ? 'Sign up to get started with Tulipcrafts.' : 'Please enter your email and password to log in.'}
            </p>

            <form autoComplete="off" onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              const password = e.target.password.value;
              
              if (isSignupMode) {
                const confirmPassword = e.target.confirmPassword.value;
                if (password !== confirmPassword) {
                  alert("Passwords do not match!");
                  return;
                }
              }

              const nameInput = isSignupMode ? e.target.fullname.value : email.split('@')[0];
              const finalName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
              
              localStorage.setItem('user', JSON.stringify({
                name: finalName, 
                email: email, 
                picture: 'https://ui-avatars.com/api/?name=' + finalName + '&background=B68D84&color=fff'
              }));
              setShowLoginModal(false);
              window.location.reload();
            }}>
              
              {isSignupMode && (
                <div style={{marginBottom: '15px'}}>
                  <label className="login-modal-label">Full Name</label>
                  <input 
                    type="text" 
                    name="fullname"
                    autoComplete="new-password"
                    required
                    className="login-modal-input"
                  />
                </div>
              )}

              <div style={{marginBottom: '15px'}}>
                <label className="login-modal-label">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  autoComplete="new-password"
                  required
                  className="login-modal-input"
                />
              </div>

              <div style={{marginBottom: isSignupMode ? '15px' : '20px'}}>
                <label className="login-modal-label">Password</label>
                <input 
                  type="password" 
                  name="password"
                  autoComplete="new-password"
                  required
                  className="login-modal-input"
                  style={{letterSpacing: '2px'}}
                />
              </div>

              {isSignupMode && (
                <div style={{marginBottom: '20px'}}>
                  <label className="login-modal-label">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    autoComplete="new-password"
                    required
                    className="login-modal-input"
                    style={{letterSpacing: '2px'}}
                  />
                </div>
              )}

              {!isSignupMode && (
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-light)', cursor: 'pointer'}}>
                    <input type="checkbox" style={{accentColor: 'var(--color-peach-dark)'}} /> Remember me
                  </label>
                  <span style={{fontSize: '0.9rem', color: 'var(--color-peach-dark)', fontWeight: 'bold', cursor: 'pointer'}}>Forgot Password?</span>
                </div>
              )}

              <button 
                type="submit"
                style={{
                  width: '100%', background: 'var(--color-text-main)', color: 'white',
                  padding: '16px', border: 'none', borderRadius: '12px', fontSize: '1.1rem',
                  fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px'
                }}
              >
                {isSignupMode ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
              <div style={{flex: 1, height: '1px', background: '#eee'}}></div>
              <span style={{fontSize: '0.9rem', color: '#999', fontWeight: 'bold'}}>OR</span>
              <div style={{flex: 1, height: '1px', background: '#eee'}}></div>
            </div>

            <button 
              type="button"
              onClick={() => {
                const width = 500;
                const height = 600;
                const left = (window.innerWidth / 2) - (width / 2);
                const top = (window.innerHeight / 2) - (height / 2);
                window.open('/google-auth', 'GoogleAuth', `width=${width},height=${height},top=${top},left=${left}`);
                
                window.addEventListener('message', function authListener(event) {
                  if (event.data === 'GOOGLE_LOGIN_SUCCESS') {
                    window.removeEventListener('message', authListener);
                    setShowLoginModal(false);
                    window.location.reload();
                  }
                });
              }}
              style={{
                width: '100%', background: 'white', color: '#3c4043',
                padding: '12px', border: '1px solid #dadce0', borderRadius: '4px', fontSize: '0.95rem',
                fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                transition: 'background 0.2s', fontFamily: 'Roboto, Arial, sans-serif'
              }}
              onMouseOver={e => e.target.style.background = '#f8f9fa'}
              onMouseOut={e => e.target.style.background = 'white'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>

            <p style={{marginTop: '25px', textAlign: 'center', fontSize: '0.95rem', color: 'var(--color-text-light)'}}>
              {isSignupMode ? (
                <>Already have an account? <span onClick={() => setIsSignupMode(false)} style={{color: 'var(--color-peach-dark)', fontWeight: 'bold', cursor: 'pointer'}}>Sign in</span></>
              ) : (
                <>Don't have an account? <span onClick={() => setIsSignupMode(true)} style={{color: 'var(--color-peach-dark)', fontWeight: 'bold', cursor: 'pointer'}}>Sign up</span></>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
