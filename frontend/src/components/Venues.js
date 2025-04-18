import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Venues.css';

const Venues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample venue data with Unsplash images
  const venues = [
    {
      id: 1,
      name: 'The Comedy Club',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Comedy Venue',
      description: 'Premier comedy club featuring top stand-up comedians and improv shows in the heart of Mumbai.',
      capacity: 200,
      amenities: ['Full Bar', 'Food Service', 'VIP Seating'],
      rating: 4.8,
      bookingRate: '₹15,000-₹25,000'
    },
    {
      id: 2,
      name: 'Harmony Theatre',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Performing Arts Center',
      description: 'Versatile performing arts venue with state-of-the-art acoustics and lighting for concerts and theatrical performances.',
      capacity: 350,
      amenities: ['Orchestra Pit', 'Backstage Facilities', 'Sound System'],
      rating: 4.9,
      bookingRate: '₹25,000-₹40,000'
    },
    {
      id: 3,
      name: 'Rhythm House',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Music Venue',
      description: 'Intimate music venue known for hosting both classical and contemporary performances with excellent acoustics.',
      capacity: 150,
      amenities: ['Recording Facilities', 'Green Room', 'Lighting System'],
      rating: 4.7,
      bookingRate: '₹10,000-₹20,000'
    },
    {
      id: 4,
      name: 'Cultural Center',
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Multi-purpose Venue',
      description: 'Prestigious cultural center dedicated to promoting traditional and contemporary Indian performing arts.',
      capacity: 500,
      amenities: ['Exhibition Space', 'Multiple Stages', 'Conference Rooms'],
      rating: 4.8,
      bookingRate: '₹30,000-₹50,000'
    },
    {
      id: 5,
      name: 'Spotlight Arena',
      location: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Performance Hall',
      description: 'Modern performance hall with flexible seating arrangements and cutting-edge technical facilities.',
      capacity: 250,
      amenities: ['Adjustable Stage', 'Digital Projections', 'Surround Sound'],
      rating: 4.6,
      bookingRate: '₹18,000-₹30,000'
    },
    {
      id: 6,
      name: 'Heritage Auditorium',
      location: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Historic Venue',
      description: 'Historic auditorium housed in a restored palace, offering a unique blend of traditional architecture and modern facilities.',
      capacity: 180,
      amenities: ['Heritage Tours', 'Outdoor Performance Area', 'Royal Lounge'],
      rating: 4.9,
      bookingRate: '₹20,000-₹35,000'
    }
  ];

  // Filter venues based on search term
  const filteredVenues = venues.filter(venue => 
    venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="venues-container">
      <div className="venues-header">
        <h1>Performance Venues</h1>
        <div className="search-filter-container">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search venues..." 
              value={searchTerm}
              onChange={handleSearch}
            />
            <span className="search-icon">🔍</span>
          </div>
          <button className="filter-btn">
            <span className="filter-icon">⚙️</span> Filters
          </button>
        </div>
      </div>

      <div className="venues-grid">
        {filteredVenues.length > 0 ? (
          filteredVenues.map(venue => (
            <div key={venue.id} className="venue-card">
              <div className="venue-image" style={{ backgroundImage: `url(${venue.image})` }}>
                <div className="venue-location">
                  <span className="location-icon">📍</span> {venue.location}
                </div>
              </div>
              <div className="venue-content">
                <h2 className="venue-name">{venue.name}</h2>
                <div className="venue-category">{venue.category}</div>
                <p className="venue-description">{venue.description}</p>
                
                <div className="venue-details">
                  <div className="venue-detail">
                    <span className="detail-icon">👥</span>
                    <span>Capacity: {venue.capacity}</span>
                  </div>
                  <div className="venue-detail">
                    <span className="detail-icon">⭐</span>
                    <span>Rating: {venue.rating}/5</span>
                  </div>
                </div>
                
                <div className="venue-amenities">
                  {venue.amenities.map((amenity, index) => (
                    <span key={index} className="amenity-tag">{amenity}</span>
                  ))}
                </div>
                
                <div className="venue-booking">
                  <div className="booking-rate">
                    <span className="rate-label">Booking Rate:</span>
                    <span className="rate-value">{venue.bookingRate}</span>
                  </div>
                  <Link to={`/venues/${venue.id}`} className="view-venue-btn">View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No venues found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Venues;