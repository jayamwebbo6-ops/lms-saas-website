
import React from "react";
import "./Features.css";

import dashboard from "../../img/dashboard.png";
import teachers from "../../img/teachers.png";
import question from "../../img/qestion.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";


import subscription from "../../img/subscription.png";

const Features = () => {
  const images = [
    dashboard,
    teachers,
    question,
    subscription,
  ];

  return (
    <>
     <Navbar/>
    <div className="feature-container">
         
      <div className="image-slider">
        <div className="slider-track">
  {images.concat(images).map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`slide-${index}`}
      className="slide-img"
    />
  ))}
</div>

      </div>

      <div className="content-box">
        <section>
          <h1>INSTITUTE Website</h1>
        <p>
          A fully branded mini website for your institute with login access for teachers and students,
          showcasing your institute online.
        </p>
        </section>

        <h3>Dashboard</h3>
        <p>
          A powerful admin dashboard to manage teachers, classes, students, question banks, tests,
          and subscription usage—all in one place.
        </p>

        <h3>Teacher Management</h3>
        <p>
          Create teacher accounts, assign permissions, and allow them to create questions, schedule tests,
          and monitor performance.
        </p>

        <h3>Subscription & Usage</h3>
        <p>
          Track plan limits based on classes, teachers, students, and test hours. Upgrade anytime
          as your institute grows.
        </p>

        <h3>Settings & Customization</h3>
        <p>
          Configure institute details, manage branding, and customize basic website sections.
        </p>
      </div>
    </div>
     <Footer />
    </>
    
  );
};

export default Features;
