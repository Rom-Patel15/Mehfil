import React, { useEffect, useState } from "react";
import "../styles/UpcomingEvents.css";

const AudienceDashboard = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/shows")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch(() => {
        setShows([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="upcoming-events">
      <h1>Upcoming Events</h1>
      {loading ? (
        <p>Loading events...</p>
      ) : shows.length > 0 ? (
        <div className="event-cards">
          {shows.map((show) => (
            <div key={show._id || show.id} className="event-card">
              <div className="event-details">
                <h3 className="event-name">{show.showTitle}</h3>
                <div className="event-venue">{show.venue}</div>
                <div className="event-date">{show.date} • {show.time}</div>
                <div className="event-description">{show.description}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
};

export default AudienceDashboard;