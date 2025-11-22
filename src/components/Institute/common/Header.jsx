import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, User, GraduationCap, Menu, X } from 'lucide-react';


// Demo logo image - replace with your actual logo
// import demoLogo from '../assets/images/logo.png';

const Header = () => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' }
  ];

  const loginOptions = [
    { 
      type: 'teacher', 
      label: 'Teacher Login', 
      path: '/teacher-login',
      icon: <User size={16} />
    },
    { 
      type: 'student', 
      label: 'Student Login', 
      path: '/student-login',
      icon: <GraduationCap size={16} />
    }
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="institute-header">
      <div className="institute-header-container">
        {/* Logo */}
        <div className="institute-logo">
          <Link to="/">
            <div className="institute-logo-wrapper">
              <img src="" alt="Institute Logo" className="institute-logo-image" />
              <span className="institute-logo-text">EduInstitute</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="institute-nav-desktop">
          <ul className="institute-nav-menu">
            {navItems.map((item) => (
              <li key={item.path} className="institute-nav-item">
                <Link 
                  to={item.path} 
                  className={`institute-nav-link ${isActivePath(item.path) ? 'institute-nav-active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login Dropdown - Desktop */}
        <div className="institute-login-section">
          <div className="institute-login-dropdown">
            <button 
              className="institute-login-toggle"
              onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
              onBlur={() => setTimeout(() => setIsLoginDropdownOpen(false), 200)}
            >
              <span>Login</span>
              <ChevronDown size={16} className={`institute-dropdown-arrow ${isLoginDropdownOpen ? 'institute-rotate' : ''}`} />
            </button>

            {isLoginDropdownOpen && (
              <div className="institute-dropdown-menu">
                {loginOptions.map((option) => (
                  <Link
                    key={option.type}
                    to={option.path}
                    className="institute-dropdown-item"
                    onClick={() => setIsLoginDropdownOpen(false)}
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="institute-mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`institute-nav-mobile ${isMobileMenuOpen ? 'institute-mobile-open' : ''}`}>
        <nav className="institute-mobile-nav">
          <ul className="institute-mobile-nav-menu">
            {navItems.map((item) => (
              <li key={item.path} className="institute-mobile-nav-item">
                <Link 
                  to={item.path} 
                  className={`institute-mobile-nav-link ${isActivePath(item.path) ? 'institute-nav-active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Mobile Login Options */}
            <div className="institute-mobile-login-section">
              {loginOptions.map((option) => (
                <Link
                  key={option.type}
                  to={option.path}
                  className="institute-mobile-login-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {option.icon}
                  <span>{option.label}</span>
                </Link>
              ))}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;