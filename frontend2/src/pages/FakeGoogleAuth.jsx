import React from 'react';

export default function FakeGoogleAuth() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', background: '#fff', fontFamily: 'Roboto, Arial, sans-serif'
    }}>
      <div style={{
        width: '450px', display: 'flex', flexDirection: 'column',
        padding: '40px', boxSizing: 'border-box'
      }}>
        
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
          <svg width="48" height="48" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
        </div>

        <h1 style={{fontSize: '24px', fontWeight: '400', margin: '0 0 10px 0', textAlign: 'center', color: '#202124'}}>Sign in</h1>
        <p style={{fontSize: '16px', margin: '0 0 40px 0', textAlign: 'center', color: '#202124'}}>Continue to Tulipcrafts</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          const googleEmail = e.target.googleEmail.value;
          const name = googleEmail.split('@')[0];
          const user = {
            name: name.charAt(0).toUpperCase() + name.slice(1), 
            email: googleEmail, 
            picture: 'https://ui-avatars.com/api/?name=' + name + '&background=EA4335&color=fff'
          };
          
          localStorage.setItem('user', JSON.stringify(user));
          
          if (window.opener) {
            window.opener.postMessage('GOOGLE_LOGIN_SUCCESS', '*');
            window.close();
          } else {
            window.location.href = '/';
          }
        }} style={{display: 'flex', flexDirection: 'column', flex: 1}}>
          
          <div style={{position: 'relative', marginBottom: '10px'}}>
            <input 
              type="email" 
              name="googleEmail"
              required
              placeholder="Email or phone"
              style={{
                width: '100%', padding: '13px 15px', borderRadius: '4px',
                border: '1px solid #dadce0', fontSize: '16px', outline: 'none',
                boxSizing: 'border-box'
              }} 
              onFocus={e => e.target.style.border = '2px solid #1a73e8'}
              onBlur={e => e.target.style.border = '1px solid #dadce0'}
            />
          </div>
          
          <span style={{color: '#1a73e8', fontWeight: '500', fontSize: '14px', cursor: 'pointer', marginBottom: '50px'}}>Forgot email?</span>

          <p style={{fontSize: '14px', color: '#5f6368', lineHeight: '1.5', marginTop: 'auto', marginBottom: '50px'}}>
            Not your computer? Use Guest mode to sign in privately. <br/>
            <span style={{color: '#1a73e8', fontWeight: '500', cursor: 'pointer'}}>Learn more</span>
          </p>

          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{color: '#1a73e8', fontWeight: '500', fontSize: '14px', cursor: 'pointer'}}>Create account</span>
            <button 
              type="submit"
              style={{
                background: '#1a73e8', color: 'white', border: 'none',
                padding: '10px 24px', borderRadius: '4px', fontSize: '14px',
                fontWeight: '500', cursor: 'pointer', transition: 'background 0.2s'
              }}
              onMouseOver={e => e.target.style.background = '#1557b0'}
              onMouseOut={e => e.target.style.background = '#1a73e8'}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
