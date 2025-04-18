import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userType: '',
    password: '123456',
    confirmPassword: '123456'
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', formData);
    
    // Redirect based on user type
    if (formData.userType === 'venue') {
      navigate('/venue/dashboard');
    } else {
      // Redirect other user types to their respective dashboards
      navigate('/');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <div className="signup-icon">
            <span className="smile-icon">😊</span>
          </div>
          <h2>Create Account</h2>
          <p>Join the artistic community today</p>
        </div>

        <div className="signup-options">
          <button className="google-signup-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="signup-divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <div className="input-container">
              <span className="input-icon">👤</span>
              <input 
                type="text" 
                id="fullName" 
                name="fullName"
                placeholder="Your name" 
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="userType">I am a</label>
            <div className="input-container">
              <select 
                id="userType" 
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select your role</option>
                <option value="artist">Artist</option>
                <option value="venue">Venue Manager</option>
                <option value="audience">Audience Member</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-container">
              <span className="input-icon">✉️</span>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <span className="input-icon">🔒</span>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password"
                placeholder="Your password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-container">
              <span className="input-icon">🔒</span>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword" 
                name="confirmPassword"
                placeholder="Confirm your password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>
    
          <div className="button-container">
            <button type="submit" className="signup-btn">Create Account</button>
          </div>
        </form>

        <div className="login-prompt">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>

        <div className="terms-notice">
          <p>By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;