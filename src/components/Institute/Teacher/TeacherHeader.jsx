import React, { useState } from 'react';
import { 
  Bell,
  Search,
  Menu,
  ChevronDown,
  User,
  Settings,
  LogOut
} from 'lucide-react';

const TeacherHeader = ({ onMenuToggle, userName = "Dr. Sarah Johnson" }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="institute-dashboard-header">
      <div className="institute-header-container">
        <div className="institute-header-left">
          <button 
            className="institute-sidebar-toggle"
            onClick={onMenuToggle}
          >
            <Menu size={24} />
          </button>
          <div className="institute-search-bar">
            <Search size={20} className="institute-search-icon" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="institute-search-input"
            />
          </div>
        </div>

        <div className="institute-header-right">
          <button className="institute-notification-btn">
            <Bell size={20} />
            <span className="institute-notification-badge">3</span>
          </button>

          <div className="institute-user-menu">
            <button 
              className="institute-user-btn"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            >
              <div className="institute-user-avatar">
                <User size={20} />
              </div>
              <span className="institute-user-name">{userName}</span>
              <ChevronDown size={16} className={`institute-user-arrow ${userDropdownOpen ? 'institute-rotate' : ''}`} />
            </button>

            {userDropdownOpen && (
              <div className="institute-user-dropdown">
                <button className="institute-dropdown-item">
                  <User size={16} />
                  <span>Profile</span>
                </button>
                <button className="institute-dropdown-item">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                <div className="institute-dropdown-divider"></div>
                <button className="institute-dropdown-item">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TeacherHeader;