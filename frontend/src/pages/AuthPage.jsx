import { useState } from 'react';

const initialLogin = {
  email: '',
  password: ''
};

const initialSignup = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const [loginForm, setLoginForm] = useState(initialLogin);
  const [signupForm, setSignupForm] = useState(initialSignup);
  const [message, setMessage] = useState('');

  const handleLoginChange = (event) => {
    setLoginForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  const handleSignupChange = (event) => {
    setSignupForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setMessage(`Welcome back, ${loginForm.email || 'friend'}! Your account is ready.`);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      setMessage('Passwords do not match. Please check both fields.');
      return;
    }

    setMessage(`Account created for ${signupForm.name || 'your new profile'}!`);
    setSignupForm(initialSignup);
  };

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <section className="auth-visual">
          <div className="auth-badge">Fresh arrivals • Spring edit</div>
          <h1>Bring home a little luxury.</h1>
          <p>
            Your floral wishlist, gifting moments, and custom orders all in one beautifully simple place.
          </p>

          <div className="auth-feature-list">
            <div>
              <span>✓</span>
              <p>Fast gifting checkout</p>
            </div>
            <div>
              <span>✓</span>
              <p>Exclusive product drops</p>
            </div>
            <div>
              <span>✓</span>
              <p>Custom order tracking</p>
            </div>
          </div>
        </section>

        <section className="auth-card">
          <div className="auth-tab-row">
            <button
              type="button"
              className={mode === 'login' ? 'active' : ''}
              onClick={() => setMode('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={mode === 'signup' ? 'active' : ''}
              onClick={() => setMode('signup')}
            >
              Sign Up
            </button>
          </div>

          {mode === 'login' ? (
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <h2>Welcome back</h2>
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                />
              </label>

              <div className="auth-meta-row">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary full-width">Login</button>

              <div className="divider"><span>or continue with</span></div>

              <div className="social-row">
                <button type="button" className="social-btn">Google</button>
                <button type="button" className="social-btn">Apple</button>
              </div>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleSignupSubmit}>
              <h2>Create account</h2>
              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  value={signupForm.name}
                  onChange={handleSignupChange}
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  value={signupForm.email}
                  onChange={handleSignupChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={signupForm.password}
                  onChange={handleSignupChange}
                  placeholder="Create a password"
                  minLength="6"
                  required
                />
              </label>

              <label>
                Confirm password
                <input
                  type="password"
                  name="confirmPassword"
                  value={signupForm.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm your password"
                  minLength="6"
                  required
                />
              </label>

              <button type="submit" className="btn btn-primary full-width">Create Account</button>

              <div className="divider"><span>or sign up with</span></div>

              <div className="social-row">
                <button type="button" className="social-btn">Google</button>
                <button type="button" className="social-btn">Instagram</button>
              </div>
            </form>
          )}

          {message && <div className="auth-message">{message}</div>}
        </section>
      </div>
    </main>
  );
}
