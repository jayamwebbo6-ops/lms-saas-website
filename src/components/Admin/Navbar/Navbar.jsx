import React, { useState } from "react";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [showFeatures, setShowFeatures] = useState(false);
  const navigate = useNavigate();

  // OLD — still kept
  const goToFeatures = () => {
    navigate("/features");
    setShowFeatures(false);
  };

  // NEW — scroll to specific section
  const goToFeatureSection = (section) => {
    navigate(`/features#${section}`);
    setShowFeatures(false);
  };

  // Smooth scroll to blog section
  const scrollToBlog = () => {
    const blog = document.getElementById("blog-section");
    if (blog) {
      blog.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/"><b id="logo-text">LMS-SAAS</b></Link>
      </div>

      <ul className="navbar-links">

        {/* FEATURES DROPDOWN */}
        <li className="dropdown" onClick={() => setShowFeatures(!showFeatures)}>
          <b>Features</b>
          <FaChevronDown className="arrow-icon" />

          {showFeatures && (
            <div className="dropdown-menu features-grid">

              {/* ROW 1 */}
              <div className="feature-box">
                <h4>Institute</h4>
                <p onClick={() => goToFeatureSection("institute")}>website – branded mini-site.</p>
                <p onClick={() => goToFeatureSection("institute")}>dashboard for teachers & classes.</p>
                <p onClick={() => goToFeatureSection("institute")}>teacher management tools.</p>
                <p onClick={() => goToFeatureSection("institute")}>subscription tracking.</p>
                <p onClick={() => goToFeatureSection("institute")}>customization settings.</p>
              </div>

              <div className="feature-box">
                <h4>Classes</h4>
                <p onClick={() => goToFeatureSection("classes")}>create class groups.</p>
                <p onClick={() => goToFeatureSection("classes")}>auto student grouping.</p>
                <p onClick={() => goToFeatureSection("classes")}>assign tests per class.</p>
                <p onClick={() => goToFeatureSection("classes")}>participation tracking.</p>
              </div>

              <div className="feature-box">
                <h4>Students</h4>
                <p onClick={() => goToFeatureSection("students")}>bulk upload.</p>
                <p onClick={() => goToFeatureSection("students")}>email-based test access.</p>
                <p onClick={() => goToFeatureSection("students")}>student profiles.</p>
                <p onClick={() => goToFeatureSection("students")}>attendance tracking.</p>
              </div>

              {/* ROW 2 */}
              <div className="feature-box">
                <h4>Question Bank</h4>
                <p onClick={() => goToFeatureSection("questions")}>mcq / msq / descriptive.</p>
                <p onClick={() => goToFeatureSection("questions")}>latex math editor.</p>
                <p onClick={() => goToFeatureSection("questions")}>question tags & categories.</p>
                <p onClick={() => goToFeatureSection("questions")}>reusable questions.</p>
              </div>

              <div className="feature-box">
                <h4>Tests</h4>
                <p onClick={() => goToFeatureSection("tests")}>scheduled tests.</p>
                <p onClick={() => goToFeatureSection("tests")}>unscheduled tests.</p>
                <p onClick={() => goToFeatureSection("tests")}>simple builder.</p>
                <p onClick={() => goToFeatureSection("tests")}>email distribution.</p>
              </div>

              <div className="feature-box">
                <h4>Results</h4>
                <p onClick={() => goToFeatureSection("results")}>instant scores.</p>
                <p onClick={() => goToFeatureSection("results")}>class-wise reports.</p>
                <p onClick={() => goToFeatureSection("results")}>export results.</p>
              </div>

            </div>
          )}
        </li>

        {/* OTHER MENU ITEMS */}
        <li className="no-dropdown">
          <Link to="/solutions"><b>Solutions</b></Link>
        </li>

        <li className="no-dropdown">
          <Link to="/price"><b>Pricing</b></Link>
        </li>

        {/* BLOG → SCROLL */}
        <li className="no-dropdown" onClick={scrollToBlog}>
          <b style={{ cursor: "pointer" }}>Blog</b>
        </li>

      </ul>

      <div className="navbar-actions">
        <button id="btn-sign-in">Sign In</button>
        <button id="btn-demo">Request Demo</button>
      </div>
    </nav>
  );
}

export default Navbar;
