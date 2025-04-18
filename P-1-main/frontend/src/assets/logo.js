// This is a placeholder. You should replace this with an actual image file.
// For now, we'll create a simple SVG logo component

import React from 'react';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="#ff4d6d" />
    <path d="M20 10V25M20 25L15 20M20 25L25 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="10" r="3" fill="white" />
  </svg>
);

export default Logo;