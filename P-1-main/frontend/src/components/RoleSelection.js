import React from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Added Link import
import '../styles/RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === 'venue') {
      navigate('/venue/dashboard');
    } else if (role === 'performer') {  // Changed from 'artist' to 'performer'
      navigate('/performer/dashboard');
    } else if (role === 'audience') {
      navigate('/audience/dashboard');
    } 
  };

  return (
    <div className="role-selection">
      <h2 className="role-title">Choose Your Role</h2>
      <p className="role-description">
        Artist Link brings together all parts of the artist ecosystem. Select the role that best describes you.
      </p>
      
      <div className="role-cards">
       
          
         
        
        <div className="role-card">
          <div className="role-icon venue-icon">
            <span>🏛️</span>
          </div>
          <h3>Venue Manager</h3>
          <p>Manage venues, capacity details, and handle event approvals and bookings.</p>
          <button className="btn btn-primary" onClick={() => handleRoleSelect('venue')}>Select</button>
        </div>
        
        <div className="role-card">
          <div className="role-icon performer-icon">
            <span>🎤</span>
          </div>
          <h3>Performer</h3>
          <p>Create profiles, submit show proposals, upload media, and manage your career.</p>
          <button className="btn btn-primary" onClick={() => handleRoleSelect('performer')}>Select</button>
        </div>
        
        <div className="role-card">
          <div className="role-icon audience-icon">
            <span>😊</span>
          </div>
          <h3>Audience</h3>
          <p>Discover shows, book tickets, and enjoy the best live comedy experiences.</p>
          <button className="btn btn-primary" onClick={() => handleRoleSelect('audience')}>Select</button>
        </div>
      </div>
      
      <div className="login-prompt">
        <p>Already have an account? <a href="/login" className="login-link">Log in</a></p>
      </div>
    </div>
  );
};

export default RoleSelection;