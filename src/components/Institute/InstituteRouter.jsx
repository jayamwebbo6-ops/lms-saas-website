import React from 'react'
import { Routes, Route } from "react-router-dom";
import TeacherLogin from './Teacher/TeacherLogin'
import Home from './web/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherMain from './Teacher/TeacherMain';
import './institute.css'
import TeacherClass from './Teacher/TeacherClass';
import TeacherTest from './Teacher/TeacherTest';


const InstituteRouter = () => {
  return (
    <div>          
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Teacher Login Page */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        
        {/* Teacher Dashboard with nested routes */}
        <Route path="/teacher-dashboard/*" element={<TeacherDashboard />}>
          {/* Default route - Dashboard */}
          <Route index element={<TeacherMain />} />
          {/* Dashboard route */}
          <Route path="dashboard" element={<TeacherMain />} />
          {/* My Classes route */}
          <Route path="classes" element={<TeacherClass />} />

          <Route path="tests" element={<TeacherTest />} />
         
        </Route>
      </Routes>
    </div>    
  )
}

export default InstituteRouter