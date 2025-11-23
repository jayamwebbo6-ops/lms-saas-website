import React from "react";
import "./HeroSection.css";

import Screenshot1 from "../../../img/Screenshot 1.png";
import Screenshot2 from "../../../img/Screenshot 2.png";
import Screenshot3 from "../../../img/Screenshot 3.png";

import Footer from "../Footer/Footer";
import BlogSection from "./BlogSection";


import {
    FaChalkboardTeacher,
    FaSchool,
    FaUniversity,
    FaClipboardList,
    FaUserGraduate,
    FaBookReader
} from "react-icons/fa";

function HeroSection() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-home">
                    <h1 className="hero-headline">
                        Create, Schedule & Manage Tests with Zero Complexity
                    </h1>

                    <p className="hero-subheadline">
                        A powerful SaaS LMS where institutes get their own branded website,
                        teacher dashboard, class management, question banks, and seamless
                        online test conduction.
                    </p>

                    <div className="hero-cta">
                        <button className="btn btn-primary">Start Free Trial</button>
                        <button className="btn btn-secondary">View Pricing</button>
                    </div>
                </div>

                <div className="hero-images">
                    <img src={Screenshot1} alt="Dashboard" id="img-1" />
                    <img src={Screenshot2} alt="Dashboard" id="img-2" />
                    <img src={Screenshot3} alt="Dashboard" id="img-3" />
                </div>
            </section>

            {/* TRUSTED SECTION */}
            <div className="trusted-section">
                <p className="trusted-text">Trusted by institutes across India</p>

                <div className="stats-row">
                    <div>
                        <span className="stats-value">120+</span>
                        <span id="stats-label-1">institutes</span>
                    </div>
                    <div>
                        <span className="stats-value">50K+</span>
                        <span id="stats-label-2">tests</span>
                    </div>
                    <div>
                        <span className="stats-value">2M+</span>
                        <span className="stats-label">questions processed</span>
                    </div>
                </div>
            </div>

            {/* SECTION 3 */}
            <section className="section-three">
                <h1>Everything Your Institute Needs in One Powerful LMS</h1>
                <p>
                    Manage teachers, students, classes, tests, and your own website—
                    effortlessly. A complete platform designed to simplify operations
                    and deliver a seamless learning and testing experience.
                </p>

                <div className="alternating-wrapper">
                    {/* 1 */}
                    <div className="alt-section">
                        <div className="alt-text">
                            <h2>Built for Modern Institutes</h2>
                            <p>
                                From creating questions to conducting tests, our LMS brings all
                                essential tools together so institutes can manage everything in one place.
                            </p>
                        </div>

                        <img
                            src="https://thumbs.dreamstime.com/b/modern-medical-school-simulation-lab-digital-displays-empty-room-computers-screens-chairs-innovation-training-center-tech-385621818.jpg"
                            className="alt-img"
                            alt="Modern School"
                        />
                    </div>

                    {/* 2 */}
                    <div className="alt-section reverse">
                        <div className="alt-text">
                            <h2>The Complete Toolkit for Test-Driven Institutes</h2>
                            <p>
                                Get a fully integrated system with institute website, class
                                management, advanced question bank, and flexible test creation.
                            </p>
                        </div>

                        <img
                            src="https://www.zealousys.com/wp-content/uploads/2023/09/Steps-to-Implementing-Test-Driven-Development.png"
                            className="alt-img"
                            alt="Toolkit"
                        />
                    </div>

                    {/* 3 */}
                    <div className="alt-section">
                        <div className="alt-text">
                            <h2>Smart Features That Power Your Institute</h2>
                            <p>
                                Our platform combines intuitive management tools and advanced
                                testing features to help institutes run smoother and efficiently.
                            </p>
                        </div>

                        <img
                            src="https://www.idreameducation.org/wp-content/uploads/2024/06/teacher-using-smart-class-in-schools-of-meghalaya-1024x571.webp"
                            className="alt-img"
                            alt="Smart Features"
                        />
                    </div>

                    {/* 4 */}
                    <div className="alt-section reverse">
                        <div className="alt-text">
                            <h2>A Unified System to Manage Your Entire Institute</h2>
                            <p>
                                Simplify your operations with class management, test creation,
                                question banks, and institute branding—all in one platform.
                            </p>
                        </div>

                        <img
                            src="https://softloom.com/wp-content/uploads/2024/03/institute-management-software-scaled.webp"
                            className="alt-img"
                            alt="Unified System"
                        />
                    </div>
                </div>
            </section>

            {/* BLOG SECTION — SCROLL TARGET */}
            <section id="blog-section">
                <BlogSection />
            </section>

            {/* SOLUTIONS SECTION */}
            <section className="solutions-section">
                <h1>Solutions for Every Type of Institute</h1>

                <p className="section-subtext">
                    We provide smart tools for all types of institutes to manage tests
                    easily. From schools to coaching centers, our platform simplifies
                    assessments and daily operations.
                </p>

                <div className="solutions-grid">
                    {[
                        {
                            title: "Coaching Institutes",
                            desc: "Manage classes, maintain student records, and send scheduled or unscheduled tests instantly.",
                            icon: <FaChalkboardTeacher className="solution-icon" />
                        },
                        {
                            title: "Schools",
                            desc: "Organize students into classes, create teacher accounts, and conduct secure online tests.",
                            icon: <FaSchool className="solution-icon" />
                        },
                        {
                            title: "Colleges",
                            desc: "Handle multiple departments, build advanced question banks, and deliver LaTeX-supported tests.",
                            icon: <FaUniversity className="solution-icon" />
                        },
                        {
                            title: "Competitive Exam Centers",
                            desc: "Create exam-style question sets and conduct both scheduled & practice tests easily.",
                            icon: <FaClipboardList className="solution-icon" />
                        },
                        {
                            title: "Online Tutors",
                            desc: "Maintain student lists, create tests quickly, and send instant test links.",
                            icon: <FaUserGraduate className="solution-icon" />
                        },
                        {
                            title: "Training Centers",
                            desc: "Store trainee details and conduct assessments anytime with flexible schedules.",
                            icon: <FaBookReader className="solution-icon" />
                        },
                    ].map((card, index) => (
                        <div className="solution-card" key={index}>
                            {card.icon}
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="final-cta-1">
                <h1>Ready to streamline your institute’s online tests?</h1>

                <div className="final-cta-buttons-1">
                    <button className="btn btn-primary">Start Free Trial</button>
                    <button className="btn btn-secondary">Book a Demo</button>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default HeroSection;
