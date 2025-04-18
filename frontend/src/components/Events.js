import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Events.css';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Classical Fusion Night',
      category: 'Music',
      date: 'November 15, 2023',
      location: 'The Music Pavilion, Mumbai',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the magic of Indian classical music fused with contemporary elements in this enchanting evening.',
      performers: ['Zakir Rahman', 'Amrita Sitar'],
      duration: '2.5 hours',
      price: '₹1,200 - ₹3,500',
      tags: ['Classical', 'Fusion', 'Instrumental'],
      ticketsLeft: 70,
      featured: true
    },
    {
      id: 2,
      title: 'Punjabi Folk Festival',
      category: 'Festival',
      date: 'December 5, 2023',
      location: 'Laughter Lounge, Hyderabad',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Celebrate the vibrant culture of Punjab with energetic bhangra performances, folk music, and authentic cuisine.',
      performers: ['Harpreet Singh'],
      duration: '5 hours',
      price: '₹1,000 - ₹2,500',
      tags: ['Folk', 'Festival', 'Cultural'],
      ticketsLeft: 80,
      featured: true
    },
    {
      id: 3,
      title: 'Kathak-Flamenco Fusion',
      category: 'Dance',
      date: 'January 8, 2024',
      location: 'Canvas Laugh Club, Delhi',
      image: 'https://images.unsplash.com/photo-1545959570-a94084071b5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A unique cross-cultural performance blending the intricate footwork of Kathak with the passionate expressions of Flamenco.',
      performers: ['Rajesh Kathak'],
      duration: '2 hours',
      price: '₹1,800 - ₹4,500',
      tags: ['Fusion', 'Dance', 'International'],
      ticketsLeft: 70,
      featured: true
    }
  ];

  // Filter events based on search term
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Indian Cultural Events</h1>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search events..." 
            value={searchTerm}
            onChange={handleSearch}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <h2 className="section-title">Featured Events</h2>

      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              {event.featured && <div className="featured-tag">Featured</div>}
              <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="event-category">
                  {event.category === 'Music' && '🎵'}
                  {event.category === 'Festival' && '🎪'}
                  {event.category === 'Dance' && '💃'}
                  {event.category}
                </div>
                <div className="event-date">
                  <span className="date-icon">📅</span> {event.date}
                </div>
              </div>
              <div className="event-content">
                <h2 className="event-title">{event.title}</h2>
                
                <div className="event-location">
                  <span className="location-icon">📍</span> {event.location}
                </div>
                
                <p className="event-description">{event.description}</p>
                
                <div className="event-performers">
                  <span className="performer-icon">🎭</span> {event.performers.join(', ')}
                </div>
                
                <div className="event-details">
                  <div className="event-duration">
                    <span className="duration-icon">⏱️</span> {event.duration}
                  </div>
                  <div className="event-price">
                    {event.price}
                  </div>
                </div>
                
                <div className="event-tags">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="event-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="event-footer">
                  <div className="tickets-left">
                    {event.ticketsLeft} tickets left
                  </div>
                  <Link to={`/events/${event.id}`} className="book-now-btn">Book Now</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No events found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;