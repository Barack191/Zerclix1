import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const QuickActionWidget = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleQuickBooking = () => {
    if (isAuthenticated) {
      navigate('/consultation-booking');
    } else {
      navigate('/login', { state: { returnTo: '/consultation-booking' } });
    }
  };

  return (
    <div className="quick-action-widget">
      <button
        className="quick-action-button"
        onClick={handleQuickBooking}
        aria-label="Quick booking"
        title="Book a consultation"
      >
        <Icon name="Plus" size={24} color="#FFFFFF" />
      </button>
    </div>
  );
};

export default QuickActionWidget;