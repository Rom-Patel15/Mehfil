import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Artists.css';

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample artist data
  const artists = [
    {
      id: 1,
      name: 'Arijit Kapoor',
      category: 'Singer',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specialty: 'Bollywood Playback',
      description: 'Renowned playback singer with a soulful voice that has become the soundtrack of modern Bollywood romance.',
      awards: ['Filmfare Award for Best Male Playback Singer', 'IIFA Award for Best Male Vocalist'],
      experience: '12 years',
      rating: '4.9/5',
      languages: ['Hindi', 'Bengali', 'Tamil', 'Telugu'],
      bookingRate: '₹5,00,000-₹15,00,000'
    },
    {
      id: 2,
      name: 'Meera Bharatanatyam',
      category: 'Dancer',
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specialty: 'Classical Bharatanatyam',
      description: 'Graceful classical dancer who has mastered the ancient art of Bharatanatyam and performs globally.',
      awards: ['Sangeet Natak Akademi Award', 'Padma Shri'],
      experience: '20 years',
      rating: '4.8/5',
      languages: ['Tamil', 'English', 'Hindi'],
      bookingRate: '₹2,00,000-₹5,00,000'
    },
    {
      id: 3,
      name: 'Zakir Rahman',
      category: 'Instrumentalist',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specialty: 'Tabla Maestro',
      description: 'Virtuoso tabla player who has revolutionized the percussion scene with his innovative techniques and collaborations.',
      awards: ['Grammy Award', 'Padma Bhushan', '+1 more'],
      experience: '30 years',
      rating: '4.9/5',
      languages: ['Hindi', 'Urdu', 'English'],
      bookingRate: '₹8,00,000-₹20,00,000'
    }
  ];

  // Filter artists based on search term
  const filteredArtists = artists.filter(artist => 
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="artists-container">
      <div className="artists-header">
        <h1>Indian Performing Artists</h1>
        <div className="search-filter-container">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search artists..." 
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

      <h2 className="section-title">Discover Artists</h2>

      <div className="artists-grid">
        {filteredArtists.length > 0 ? (
          filteredArtists.map(artist => (
            <div key={artist.id} className="artist-card">
              <div className="artist-image" style={{ backgroundImage: `url(${artist.image})` }}>
                <div className="artist-category-location">
                  <span className="artist-category">
                    {artist.category === 'Singer' && '🎤'}
                    {artist.category === 'Dancer' && '💃'}
                    {artist.category === 'Instrumentalist' && '🎵'}
                    {artist.category}
                  </span>
                  <span className="artist-location">
                    <span className="location-icon">📍</span> {artist.location}
                  </span>
                </div>
              </div>
              <div className="artist-content">
                <h2 className="artist-name">{artist.name}</h2>
                <div className="artist-specialty">{artist.specialty}</div>
                <p className="artist-description">{artist.description}</p>
                
                <div className="artist-awards">
                  <h3 className="section-label">Notable Awards</h3>
                  <div className="awards-list">
                    {artist.awards.map((award, index) => (
                      <span key={index} className="award-tag">{award}</span>
                    ))}
                  </div>
                </div>
                
                <div className="artist-stats">
                  <div className="stat-item">
                    <div className="stat-value">{artist.experience}</div>
                    <div className="stat-label">Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{artist.rating}</div>
                    <div className="stat-label">Rating</div>
                  </div>
                </div>
                
                <div className="artist-languages">
                  {artist.languages.map((language, index) => (
                    <span key={index} className="language-tag">{language}</span>
                  ))}
                </div>
                
                <div className="artist-booking">
                  <div className="booking-rate">
                    <span className="rate-label">Booking Rate:</span>
                    <span className="rate-value">{artist.bookingRate}</span>
                  </div>
                  <Link to={`/artists/${artist.id}`} className="view-profile-btn">View Profile</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No artists found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;