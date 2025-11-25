import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import TeacherHeader from './TeacherHeader';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
  };

  return (
    <div className="institute-teacher-dashboard">
      <TeacherSidebar 
        isOpen={sidebarOpen}
        onClose={handleSidebarClose}
        activeItem={activeSection}
        onItemClick={handleSectionChange}
      />
      
      <div className="institute-main-content">
        <TeacherHeader 
          onMenuToggle={handleSidebarToggle}
          userName="Dr. Sarah Johnson"
        />
        
        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherDashboard;