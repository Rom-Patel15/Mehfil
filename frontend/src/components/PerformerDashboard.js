import React, { useState, useEffect } from 'react';
import '../styles/PerformerDashboard.css';

const PerformerDashboard = () => {
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [proposal, setProposal] = useState({
    showTitle: '',
    venue: '',
    description: '',
    date: '',
    time: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [shows, setShows] = useState([]);

  const fetchPerformerShows = () => {
    console.log('Fetching performer shows...');
    fetch('http://localhost:5000/api/shows/performer/current-performer')
      .then(res => res.json())
      .then(data => {
        console.log('Performer shows data:', data);
        setShows(data);
      })
      .catch(err => {
        console.error('Error fetching performer shows:', err);
        setShows([]);
      });
  };

  useEffect(() => {
    fetchPerformerShows();
    // Set up polling to check for updates every 5 seconds
    const interval = setInterval(fetchPerformerShows, 5000);
    return () => clearInterval(interval);
  }, [submitStatus]);

  const handleProposalChange = (e) => {
    const { name, value } = e.target;
    setProposal(prev => ({ ...prev, [name]: value }));
  };

  const handleProposalSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/propose-show', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proposal)
      });
      if (res.ok) {
        setSubmitStatus('success');
        setProposal({ showTitle: '', venue: '', description: '', date: '', time: '' });
        setShowProposalModal(false);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };
  
  const handleDeleteShow = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/shows/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setShows(prevShows => prevShows.filter(show => show._id !== id));
      }
    } catch (err) {
      console.error('Failed to delete show:', err);
    }
  };
  


  const venueOpportunities = [
    {
      id: 1,
      name: "House Adda",
      location: "123 MG Road, Mumbai",
      date: "Apr 30, 2023",
    },
    {
      id: 2,
      name: "Comedy Hub",
      location: "45 Anna Salai, Delhi",
      date: "Apr 15, 2023",
    },
    {
      id: 3,
      name: "Sangeet Sawhney",
      location: "78 Ring Road, Bangalore",
      date: "Apr 24, 2023",
    },
    {
      id: 4,
      name: "Nitya Manch",
      location: "23 East Bridge, Kolkata",
      date: "Apr 21, 2023",
    }
  ];

  return (
    <div className="performer-dashboard">
      <div className="dashboard-header">
        <h1>Performer Dashboard</h1>
        <div className="header-actions">
          <button className="btn btn-outline-light">
            <i className="fas fa-upload"></i> Upload Media
          </button>
          <button className="btn btn-primary" onClick={() => setShowProposalModal(true)}>
            <i className="fas fa-plus"></i> Propose Show
          </button>
        </div>
      </div>

      {showProposalModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Propose a Show</h2>
              <button className="close-btn" onClick={() => setShowProposalModal(false)}>×</button>
            </div>
            <p className="modal-subtitle">Fill out the details to submit your proposal</p>
            <form className="proposal-form" onSubmit={handleProposalSubmit}>
              <div className="form-group">
                <label>Show Title</label>
                <input type="text" className="form-control" placeholder="Enter show title" name="showTitle" value={proposal.showTitle} onChange={handleProposalChange} required />
              </div>
              <div className="form-group">
                <label>Venue</label>
                <select className="form-control" name="venue" value={proposal.venue} onChange={handleProposalChange} required>
                  <option value="">Select a venue</option>
                  <option value="The Laughing Plot">The Laughing Plot</option>
                  <option value="Comedy Cellar">Comedy Cellar</option>
                  <option value="Chuckles Comedy Club">Chuckles Comedy Club</option>
                </select>
              </div>
              <div className="form-group">
                <label>Show Description</label>
                <textarea className="form-control" rows="4" placeholder="Describe your show" name="description" value={proposal.description} onChange={handleProposalChange} required></textarea>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label>Preferred Date</label>
                  <input type="date" className="form-control" name="date" value={proposal.date} onChange={handleProposalChange} required />
                </div>
                <div className="form-group half">
                  <label>Preferred Time</label>
                  <input type="time" className="form-control" name="time" value={proposal.time} onChange={handleProposalChange} required />
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-outline-light" onClick={() => setShowProposalModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="dashboard-grid">
        <div className="upcoming-shows-section">
          <div className="section-header">
            <h2>Upcoming Shows</h2>
          </div>
          <div className="shows-list">
            {shows.length > 0 ? shows.map(show => (
              <div key={show._id || show.id} className="show-item">
                <div className="show-info">
                  <h3>{show.showTitle || show.title}</h3>
                  <p>{show.venue}</p>
                  <p>{show.date} • {show.time}</p>
                </div>
                <div className="show-status">
                  <span className={`status-badge ${show.status}`}>{show.status}</span>
                  <button className="btn btn-outline-light btn-sm">View Details</button>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => handleDeleteShow(show._id || show.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )) : <p>No upcoming shows.</p>}
          </div>
        </div>

        <div className="venue-opportunities-section">
          <div className="section-header">
            <h2>Venue Opportunities</h2>
          </div>
          <div className="opportunities-grid">
            {venueOpportunities.map(venue => (
              <div key={venue.id} className="opportunity-card">
                <div className="venue-info">
                  <h3>{venue.name}</h3>
                  <p>{venue.location}</p>
                  <p className="date">{venue.date}</p>
                  <p className="price">{venue.price}</p>
                </div>
                <button className="btn btn-primary">Apply</button>
              </div>
            ))}
          </div>
          <button className="btn btn-outline-light find-more">
            Find More Venues
          </button>
        </div>

        {/* Remove the entire media-gallery-section */}
      </div>
    </div>
  );
};

export default PerformerDashboard;