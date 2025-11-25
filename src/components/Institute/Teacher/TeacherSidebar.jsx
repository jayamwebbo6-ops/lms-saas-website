import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  User, 
  LogOut,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TeacherSidebar = ({ isOpen, onClose, activeItem, onItemClick }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', path: '/institute/teacher-dashboard' },
    { icon: BookOpen, label: 'My Classes', id: 'classes', path: '/institute/teacher-dashboard/classes' },
    { icon: FileText, label: 'My Tests', id: 'tests', path: '/institute/teacher-dashboard/tests' },
    { icon: HelpCircle, label: 'Questions Banks', id: 'questions', path: '/institute/teacher-dashboard/questions' },
    { icon: User, label: 'My Profile', id: 'profile', path: '/institute/teacher-dashboard/profile' },
  ];

  const isActivePath = (path) => {
    const currentPath = location.pathname;
    return currentPath === path || 
           (currentPath === '/institute/teacher-dashboard' && path === '/institute/teacher-dashboard') ||
           (currentPath === '/institute/teacher-dashboard/' && path === '/institute/teacher-dashboard');
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="institute-sidebar-backdrop"
          onClick={onClose}
        ></div>
      )}
      
      <aside className={`institute-sidebar ${isOpen ? 'institute-sidebar-open' : ''}`}>
        <div className="institute-sidebar-header">
          <div className="institute-sidebar-logo">
            <BookOpen size={32} className="institute-sidebar-logo-icon" />
            <span className="institute-sidebar-logo-text">EduInstitute</span>
          </div>
          <button 
            className="institute-sidebar-close"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="institute-sidebar-nav">
          <ul className="institute-sidebar-menu">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className="institute-sidebar-item">
                  <Link
                    to={item.path}
                    className={`institute-sidebar-link ${isActivePath(item.path) ? 'institute-sidebar-active' : ''}`}
                    onClick={() => {
                      onItemClick(item.id);
                      onClose();
                    }}
                  >
                    <Icon size={20} className="institute-sidebar-icon" />
                    <span className="institute-sidebar-label">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="institute-sidebar-footer">
          <button className="institute-sidebar-logout">
            <LogOut size={20} className="institute-sidebar-icon" />
            <span className="institute-sidebar-label">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default TeacherSidebar;