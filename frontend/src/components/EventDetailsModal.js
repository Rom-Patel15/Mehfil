import React from 'react';
import '../styles/EventDetailsModal.css';

const EventDetailsModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="event-modal">
        <button className="close-modal" onClick={onClose}>
          <span>×</span>
        </button>

        <div className="event-modal-header">
          <h2>Friday Night Comedy</h2>
          <div className="event-date-time">
            <span className="date-icon">📅</span> Oct 15, 2023
            <span className="time-icon">🕗</span> 8:00 PM
          </div>
        </div>

        <div className="event-modal-content">
          <div className="event-details-section">
            <h3>Event Details</h3>
            
            <div className="event-stat">
              <div className="stat-label">Ticket Sales</div>
              <div className="stat-value">
                <span className="highlight-text">42</span>/60 tickets sold
              </div>
            </div>
            
            <div className="event-stat">
              <div className="stat-label">Revenue</div>
              <div className="stat-value">$1050</div>
            </div>
            
            <div className="event-stat">
              <div className="stat-label">Status</div>
              <div className="stat-value status-active">Active</div>
            </div>

            <div className="event-actions">
              <h3>Actions</h3>
              <button className="action-button">
                <span className="action-icon">✏️</span> Edit Event Details
              </button>
              <button className="action-button">
                <span className="action-icon">👥</span> Manage Attendees
              </button>
              <button className="action-button">
                <span className="action-icon">💰</span> Adjust Pricing
              </button>
            </div>
          </div>

          <div className="seating-chart-section">
            <h3>Seating Chart</h3>
            
            <div className="seating-class">
              <div className="class-header">
                <span>First Class ₹145.00</span>
              </div>
              <div className="seating-grid first-class">
                {Array(50).fill().map((_, i) => (
                  <div 
                    key={`first-${i}`} 
                    className={`seat ${Math.random() > 0.7 ? 'sold' : 'available'}`}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="seating-class">
              <div className="class-header">
                <span>Second Class ₹80.00</span>
              </div>
              <div className="seating-grid second-class">
                {Array(40).fill().map((_, i) => (
                  <div 
                    key={`second-${i}`} 
                    className={`seat ${Math.random() > 0.6 ? 'sold' : 'available'}`}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="seating-legend">
              <div className="legend-item">
                <div className="seat-sample sold"></div>
                <span>Sold</span>
              </div>
              <div className="legend-item">
                <div className="seat-sample available"></div>
                <span>Available</span>
              </div>
            </div>
            
            <div className="seating-note">
              All eyes this way please
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;