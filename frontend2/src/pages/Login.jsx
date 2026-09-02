import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify({
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture
      }));
      // Redirect to home or reload
      window.location.href = '/';
    } catch(err) {
      console.error(err);
      alert('Login failed!');
    }
  };

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fafafa'
    }}>
      <div style={{
        background: 'white',
        padding: '50px 40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text-main)', marginBottom: '10px'}}>Welcome Back</h1>
        <p style={{color: 'var(--color-text-light)', marginBottom: '40px'}}>Log in to continue to Tulipcrafts</p>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {
              console.log('Login Failed');
              alert('Google Login failed! Have you set up the correct Client ID?');
            }}
            theme="filled_black"
            shape="pill"
            size="large"
          />
        </div>
        
        <p style={{marginTop: '30px', fontSize: '0.85rem', color: '#999'}}>
          By logging in, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
