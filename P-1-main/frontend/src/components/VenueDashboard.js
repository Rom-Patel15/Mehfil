import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/VenueDashboard.css';
import EventDetailsModal from './EventDetailsModal';

const VenueDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [upcomingShows, setUpcomingShows] = useState([]);

  useEffect(() => {
    console.log('Fetching all shows...');
    fetch('http://localhost:5000/api/shows')
      .then(res => res.json())
      .then(data => {
        console.log('All shows data:', data);
        setUpcomingShows(data);
      })
      .catch(err => {
        console.error('Error fetching all shows:', err);
        setUpcomingShows([]);
      });
  }, []);
  
  const handleManageClick = () => {
    setShowModal(true);
  };
  
  const handleStatusUpdate = async (id, action) => {
    try {
      const res = await fetch(`http://localhost:5000/api/shows/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: action })
      });
      
      if (res.ok) {
        const updatedShow = await res.json();
        setUpcomingShows(prev => 
          prev.map(show => show._id === id ? updatedShow : show)
        );
        // Refresh the performer's dashboard by triggering a refetch
        fetch('http://localhost:5000/api/shows/performer/current-performer')
          .then(res => res.json())
          .then(data => {
            // This would update the performer's view
            // In a real app, we'd use websockets or state management
          });
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Add venue manager header with search */}
      <div className="venue-manager-header">
        <h1>Venue Manager Dashboard</h1>
        <div className="header-actions">
          <div className="search-comedians">
            <input type="text" placeholder="Find Comedians" />
            </div>
          <button className="btn btn-primary">Add New Venue</button>
          <button className="btn btn-outline-light">View Details</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card upcoming-shows">
            <div className="card-header">
              <h2>Upcoming Shows</h2>
              <Link to="/venue/shows" className="view-all">View All &gt;</Link>
            </div>
            <div className="shows-list">
              {upcomingShows.length > 0 ? upcomingShows.map(show => (
                <div key={show._id || show.id} className="show-item">
                  <div className="show-info">
                    <h3>{show.showTitle || show.title}</h3>
                    <p>{show.date} • {show.time}</p>
                  </div>
                  <div className="show-actions">
                    <div className="ticket-info">
                      <span className={`ticket-count`}>
                        {/* Ticket info placeholder */}
                        {show.tickets ? `${show.tickets.sold}/${show.tickets.total} tickets` : ''}
                      </span>
                    </div>
                    <button className="manage-btn" onClick={handleManageClick}>Manage</button>
                  </div>
                </div>
              )) : <p>No upcoming shows.</p>}
            </div>
            <button className="schedule-btn">
              <span className="plus-icon">+</span> Schedule New Show
            </button>
          </div>

          <div className="dashboard-card performer-requests">
            <div className="card-header">
              <h2>Performer Requests</h2>
              <Link to="/venue/requests" className="view-all">View All &gt;</Link>
            </div>
            <div className="requests-content">
              {upcomingShows.length > 0 ? upcomingShows.filter(show => show.status === 'pending').map(show => (
                <div key={show._id} className="request-item">
                  <div className="request-info">
                    <h4>{show.showTitle}</h4>

                    <p>Date: {show.date} • {show.time}</p>
                  </div>
                  <div className="request-actions">
                    <button 
                      className="btn btn-success btn-sm" 
                      onClick={() => handleStatusUpdate(show._id, 'accepted')}
                    >
                      Accept
                    </button>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => handleStatusUpdate(show._id, 'rejected')}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              )) : <p className="no-requests">No pending requests</p>}
            </div>
          </div>

          <div className="dashboard-card quick-actions">
            <h2>Quick Actions</h2>
            <div className="actions-list">
              <Link to="/venue/calendar" className="action-item">
                <span className="action-icon">📅</span>
                <span>Manage Calendar</span>
              </Link>
              <Link to="/venue/earnings" className="action-item">
                <span className="action-icon">💰</span>
                <span>View Earnings</span>
              </Link>
              <Link to="/venue/profile" className="action-item">
                <span className="action-icon">🏢</span>
                <span>Update Venue Info</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <EventDetailsModal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

export default VenueDashboard;