import React from 'react';
import '../styles/CallToAction.css';

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h2 className="cta-title">Ready to Join the Artistic Journey?</h2>
      <p className="cta-description">
        Whether you're a venue owner, performer, or art enthusiast, we've got the tools you need to elevate your artistic journey.
      </p>
      
      <div className="cta-buttons">
        <a href="/signup" className="create-account-btn">Create Account</a>
        <a href="/learn-more" className="learn-more-btn">Learn More</a>
      </div>
    </div>
  );
};

export default CallToAction;