import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import dashboard from "../../../img/dashboard.png";
import teachers from "../../../img/teachers.png";
import question from "../../../img/qestion.png";
import subscription from "../../../img/subscription.png";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Features.css";

const Features = () => {
  const images = [dashboard, teachers, question, subscription];

  // ------------------ SCROLL FIX FOR HASH ROUTES ------------------
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  // ----------------------------------------------------------------

  return (
    <>
      <Navbar />

      {/* ----------------- SECTION 1 ----------------- */}
      <div id="institute" className="feature-header">
        <h1>INSTITUTE WEBSITE</h1>
        <p>
          Create your branded mini website for teachers & students with full login access.
        </p>
      </div>

      <div className="feature-container">
        <div className="content-box">
          <h3>Institute Features</h3>
          <p>Showcase your institute online with custom branding.</p>

          <h3>Dashboard</h3>
          <p>Manage teachers, classes, students, questions & tests.</p>

          <h3>Customization</h3>
          <p>Update website details and sections easily.</p>
        </div>

        <div className="image-slider">
          <div className="slider-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt="" className="slide-img" />
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- SECTION 2 ----------------- */}
      <div id="classes" className="feature-header">
        <h1>CLASSES</h1>
        <p>Organize students and assign tests smoothly.</p>
      </div>

      <div className="feature-container">
        <div className="content-box">
          <h3>Class Creation</h3>
          <p>Create and organize class groups easily.</p>

          <h3>Student Grouping</h3>
          <p>Students appear under their assigned class.</p>

          <h3>Class-Based Test Assignment</h3>
          <p>Assign tests to entire classes in one click.</p>
        </div>

        <div className="image-slider">
          <div className="slider-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt="" className="slide-img" />
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- SECTION 3 ----------------- */}
      <div id="students" className="feature-header">
        <h1>STUDENTS</h1>
        <p>Manage student data and track participation.</p>
      </div>

      <div className="feature-container">
        <div className="content-box">
          <h3>Student Database</h3>
          <p>Add or import students in bulk.</p>

          <h3>Email-Based Test Access</h3>
          <p>Students receive tests via email — no login needed.</p>

          <h3>Attendance & Participation</h3>
          <p>Track student engagement and test completion.</p>
        </div>

        <div className="image-slider">
          <div className="slider-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt="" className="slide-img" />
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- SECTION 4 ----------------- */}
      <div id="questions" className="feature-header">
        <h1>QUESTION BANK</h1>
        <p>Create questions with categories & LaTeX support.</p>
      </div>

      <div className="feature-container">
        <div className="content-box">
          <h3>Question Types</h3>
          <p>Supports MCQ, MSQ, descriptive & true/false.</p>

          <h3>LaTeX Editor</h3>
          <p>Perfect for math, physics & engineering questions.</p>

          <h3>Categorization</h3>
          <p>Organize questions by subject, chapter & difficulty.</p>
        </div>

        <div className="image-slider">
          <div className="slider-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt="" className="slide-img" />
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- SECTION 5 ----------------- */}
      <div id="tests" className="feature-header">
        <h1>TESTS</h1>
        <p>Create scheduled & instant tests with ease.</p>
      </div>

      <div className="feature-container">
        <div className="content-box">
          <h3>Scheduled Tests</h3>
          <p>Set fixed date, start time & duration.</p>

          <h3>Unscheduled Tests</h3>
          <p>Create quick tests instantly.</p>

          <h3>Test Builder</h3>
          <p>Select questions, set marks & add instructions.</p>
        </div>

        <div className="image-slider">
          <div className="slider-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt="" className="slide-img" />
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- SECTION 6 ----------------- */}
      <div id="results" className="feature-header">
        <h1>RESULTS</h1>
        <p>Get instant results and performance analysis.</p>
      </div>

      <div className="feature-container">
        <div className="content-box">
          <h3>Instant Calculation</h3>
          <p>View results immediately after test completion.</p>

          <h3>Summary Reports</h3>
          <p>Check student-wise and class-wise performance.</p>

          <h3>Export</h3>
          <p>Download results for record keeping.</p>
        </div>

        <div className="image-slider">
          <div className="slider-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt="" className="slide-img" />
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- SECTION 7 ----------------- */}
      <div id="platform" className="feature-header">
        <h1>PLATFORM</h1>
        <p>Access anywhere with secure cloud hosting.</p>
      </div>

      <div className="feature-container">
        <div className="content-box">
          <h3>Mobile Responsive</h3>
          <p>Works on all devices — mobile, tablet & PC.</p>

          <h3>Cloud Hosting</h3>
          <p>Fast, secure & scalable infrastructure.</p>

          <h3>Support</h3>
          <p>Full onboarding & assistance for institutes.</p>
        </div>

        <div className="image-slider">
          <div className="slider-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt="" className="slide-img" />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Features;


