import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Services', path: '/service-catalog', icon: 'Grid3x3' },
    { label: 'Dashboard', path: '/client-dashboard', icon: 'LayoutDashboard' },
    { label: 'Admin', path: '/admin-dashboard', icon: 'Shield' },
  ];

  const isActive = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-nav">
        <div className="header-container">
          <Link to="/service-catalog" className="header-logo">
            <img 
              src="/assets/images/Logo-1766859915409.PNG" 
              alt="Zerclix Logo" 
              className="header-logo-image"
            />
            <div className="header-logo-text">
              <span className="header-logo-title">Zerclix</span>
              <span className="header-logo-subtitle">Building Future</span>
            </div>
          </Link>

          <nav className="header-nav-list">
            {navigationItems?.map((item) => (
              <div key={item?.path} className="header-nav-item">
                <Link
                  to={item?.path}
                  className={`header-nav-link ${isActive(item?.path) ? 'active' : ''}`}
                >
                  {item?.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <AuthStatusIndicator />
            <button
              className="header-mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenuOverlay
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navigationItems={navigationItems}
        isActive={isActive}
      />
    </>
  );
};

const AuthStatusIndicator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  React.useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const storedUserName = localStorage.getItem('userName');
    
    if (authStatus === 'true' && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName('');
    window.location.href = '/login';
  };

  if (isAuthenticated) {
    return (
      <div className="auth-status">
        <Icon name="User" size={16} />
        <span className="auth-status-text">{userName}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          iconName="LogOut"
          iconSize={16}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => window.location.href = '/login'}
      >
        Login
      </Button>
      <Button
        variant="default"
        size="sm"
        onClick={() => window.location.href = '/register'}
      >
        Register
      </Button>
    </div>
  );
};

const MobileMenuOverlay = ({ isOpen, onClose, navigationItems, isActive }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  React.useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const storedUserName = localStorage.getItem('userName');
    
    if (authStatus === 'true' && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName('');
    onClose();
    window.location.href = '/login';
  };

  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'open' : 'closed'}`}>
      <div className="mobile-menu-header">
        <Link to="/service-catalog" className="header-logo" onClick={onClose}>
          <img 
            src="/assets/images/Logo-1766859915409.PNG" 
            alt="Zerclix Logo" 
            className="header-logo-image"
          />
          <div className="header-logo-text">
            <span className="header-logo-title">Zerclix</span>
            <span className="header-logo-subtitle">Building Future</span>
          </div>
        </Link>
        <button
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close mobile menu"
        >
          <Icon name="X" size={24} />
        </button>
      </div>
      <nav className="mobile-menu-nav">
        {navigationItems?.map((item) => (
          <Link
            key={item?.path}
            to={item?.path}
            className={`mobile-menu-link ${isActive(item?.path) ? 'active' : ''}`}
            onClick={onClose}
          >
            <div className="flex items-center gap-3">
              <Icon name={item?.icon} size={20} />
              <span>{item?.label}</span>
            </div>
          </Link>
        ))}

        <div className="border-t border-border mt-4 pt-4">
          {isAuthenticated ? (
            <>
              <div className="auth-status mb-3">
                <Icon name="User" size={16} />
                <span className="auth-status-text">{userName}</span>
              </div>
              <Button
                variant="outline"
                fullWidth
                onClick={handleLogout}
                iconName="LogOut"
                iconPosition="left"
              >
                Logout
              </Button>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  onClose();
                  window.location.href = '/login';
                }}
              >
                Login
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={() => {
                  onClose();
                  window.location.href = '/register';
                }}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;