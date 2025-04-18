import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoleSelection from './components/RoleSelection';
import UpcomingEvents from './components/UpcomingEvents';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import VenueDashboard from './components/VenueDashboard';
import Venues from './components/Venues';
import Artists from './components/Artists';
import Events from './components/Events';
import PerformerDashboard from './components/PerformerDashboard';
import AudienceDashboard from './components/AudienceDashboard';
import AdminDashboard from './components/AdminDashboard';

function HomePage() {
  return (
    <>
      <Hero />
      <div className="role-section-wrapper">
        <RoleSelection />
      </div>
      <UpcomingEvents />
      <div className="testimonials-section-wrapper">
        <Testimonials />
      </div>
      <div className="cta-section-wrapper">
        <CallToAction />
      </div>
    </>
  );
}

// Wrap the Routes with TransitionGroup and CSSTransition
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div className="page-container">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={400}
          classNames="page-transition"
          unmountOnExit
        >
          <div className="page-content">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/venues" element={<Venues />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/events" element={<Events />} />
              <Route path="/venue/dashboard" element={<VenueDashboard />} />
              <Route path="/performer/dashboard" element={<PerformerDashboard />} />
              <Route path="/audience/dashboard" element={<AudienceDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;