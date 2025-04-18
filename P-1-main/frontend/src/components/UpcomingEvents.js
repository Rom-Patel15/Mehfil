import React from 'react';
import '../styles/UpcomingEvents.css';

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h2 className="events-title">Upcoming Events</h2>
      <p className="events-description">
        Discover the hottest artist performances and secure your tickets today.
      </p>
      
      <div className="event-cards">
        <div className="event-card">
          <div className="event-image event-image-1"></div>
          <div className="event-details">
            <h3 className="event-name">Cultural Night </h3>
            <p className="event-venue">The Artistic Stage</p>
            <p className="event-date">October 15, 2023</p>
          </div>
        </div>
        
        <div className="event-card">
          <div className="event-image event-image-2"></div>
          <div className="event-details">
            <h3 className="event-name">Performer Showcase</h3>
            <p className="event-venue">Rhythms Performance Club</p>
            <p className="event-date">October 22, 2023</p>
          </div>
        </div>
        
        <div className="event-card">
          <div className="event-image event-image-3"></div>
          <div className="event-details">
            <h3 className="event-name">Artistic Battle Royale</h3>
            <p className="event-venue">The Cultural Cellar</p>
            <p className="event-date">November 5, 2023</p>
          </div>
        </div>
      </div>
      
      <div className="view-all-container">
        <div className="event-actions" style={{ justifyContent: 'center' }}>
          <button className="btn btn-primary">Book Tickets</button>
          <button className="btn btn-outline-light">View All Events</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;