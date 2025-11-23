import React from "react";
import "./BlogSection.css";

function BlogSection() {
  return (
    <section className="blog-section">
      <h1 className="blog-title">Explore Our Recent Blog</h1>

      <p className="blog-subtext">
        Explore insights and tips to help institutes grow smarter. Stay updated
        on the latest trends in online exams and education technology.
      </p>

      <div className="blog-grid">
        {[
          {
            date: "Nov 15, 2025",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP9lHZ1udIE0O6Y24IMwdMsj8rO7zMXIKzw&s",
            title: "How Institutes Can Easily Conduct Online Tests in 2025",
            desc: "A simple guide for schools, colleges, and coaching centers to move assessments online.",
          },
          {
            date: "Oct 10, 2025",
            image:
              "https://i0.wp.com/novita-blog.s3.ap-southeast-1.amazonaws.com/use-ai-in-latex-editor-develop-for-enhanced-productivity-0%2ACmbsUn84I_i5i03B.png?w=1280&ssl=1",
            title: "Why LaTeX-Based Question Banks Are Essential",
            desc: "Understand how LaTeX improves accuracy and professionalism in STEM exams.",
          },
          {
            date: "Sep 22, 2025",
            image:
              "https://www.swiftelearningservices.com/wp-content/uploads/2017/03/Top6Benefit-Of-LMS.png",
            title: "Top Benefits of Using a Cloud-Based LMS",
            desc: "Discover how cloud LMS platforms save time, cut costs, and simplify operations.",
          },
        ].map((blog, index) => (
          <div className="new-blog-card" key={index}>
            <div className="blog-thumb">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            <span className="blog-date">{blog.date}</span>
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-text">{blog.desc}</p>
            <span className="blog-read">Read more →</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
