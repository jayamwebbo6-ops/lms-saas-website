import React from "react";
import "./Solutions.css";

import Screenshot1 from "../../../img/Screenshot 1.png";
import Screenshot2 from "../../../img/Screenshot 2.png";
import Screenshot3 from "../../../img/Screenshot 3.png";


import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Solutions = () => {
  const cards = [
    { icon: "✨", title: "AI Productivity Tools", desc: "Create exams from PDFs, images, translations, and more using AI." },
    { icon: "👥", title: "Observational Assessment", desc: "Observe employees in action and evaluate their skills instantly." },
    { icon: "⚡", title: "Certification Exams", desc: "Used for high-stakes exams in compliance, licensing, and professional accreditation." },
    { icon: "💡", title: "Prep Exams", desc: "Promote learning with real-time feedback, thumbs-up/down, and hints." },
    { icon: "📍", title: "Hotspot Questions", desc: "Interactive visual feedback to enhance memory retention." },
    { icon: "⏱️", title: "Build Robust Exams", desc: "Set timing, embed images, randomize questions, and more." }
  ];

  return (
    <>
      <Navbar/>
     <div className="solutions-wrapper">
        

      {/* SECTION 1 – HERO */}
      <section className="hero-section-soluction">
        <h1>Exam Software Packed With Features</h1>
        <p>20-year track record of delivering high-stakes and practice exams</p>
      </section>

      {/* ⭐ SCREENSHOTS SECTION */}
      {/* ⭐ SCREENSHOTS SECTION */}
<section className="screens-section">

  <div className="screenshot-card" id="screenshot-1">
    <img src={Screenshot1} />
  </div>

  <div className="screenshot-card" id="screenshot-2">
    <img src={Screenshot2} />
  </div>

  <div className="screenshot-card" id="screenshot-3">
    <img src={Screenshot3} />
  </div>

  <div className="screenshot-card" id="screenshot-4">
    <img src={Screenshot3} />
  </div>

</section>



      {/* SECTION 2 – CARDS */}
      <section className="cards-section">
        {cards.map((card, i) => (
          <div className="feature-card" key={i}>
            <div className="icon-box">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </section>

      {/* SECTION 3 – CTA */}
      <section className="cta-section">
        <h2>Ready to power your institute with smart online assessments?</h2>
        <div className="cta-buttons">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-outline">Schedule Demo</button>
        </div>
      </section>

    </div>
     <Footer />
    </>
   
  );
};

export default Solutions;


