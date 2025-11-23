import React, { useState } from "react";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [showFeatures, setShowFeatures] = useState(false);
  const navigate = useNavigate();

  // Go to features page
  const goToFeatures = () => {
    navigate("/features");
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
                <p onClick={goToFeatures}>website – branded mini-site.</p>
                <p onClick={goToFeatures}>dashboard for teachers & classes.</p>
                <p onClick={goToFeatures}>teacher management tools.</p>
                <p onClick={goToFeatures}>subscription tracking.</p>
                <p onClick={goToFeatures}>customization settings.</p>
              </div>

              <div className="feature-box">
                <h4>Classes</h4>
                <p onClick={goToFeatures}>create class groups.</p>
                <p onClick={goToFeatures}>auto student grouping.</p>
                <p onClick={goToFeatures}>assign tests per class.</p>
                <p onClick={goToFeatures}>participation tracking.</p>
              </div>

              <div className="feature-box">
                <h4>Students</h4>
                <p onClick={goToFeatures}>bulk upload.</p>
                <p onClick={goToFeatures}>email-based test access.</p>
                <p onClick={goToFeatures}>student profiles.</p>
                <p onClick={goToFeatures}>attendance tracking.</p>
              </div>

              {/* ROW 2 */}
              <div className="feature-box">
                <h4>Question Bank</h4>
                <p onClick={goToFeatures}>mcq / msq / descriptive.</p>
                <p onClick={goToFeatures}>latex math editor.</p>
                <p onClick={goToFeatures}>question tags & categories.</p>
                <p onClick={goToFeatures}>reusable questions.</p>
              </div>

              <div className="feature-box">
                <h4>Tests</h4>
                <p onClick={goToFeatures}>scheduled tests.</p>
                <p onClick={goToFeatures}>unscheduled tests.</p>
                <p onClick={goToFeatures}>simple builder.</p>
                <p onClick={goToFeatures}>email distribution.</p>
              </div>

              <div className="feature-box">
                <h4>Results</h4>
                <p onClick={goToFeatures}>instant scores.</p>
                <p onClick={goToFeatures}>class-wise reports.</p>
                <p onClick={goToFeatures}>export results.</p>
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

