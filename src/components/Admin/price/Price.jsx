import React from "react";
import "./Price.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Price = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      duration: "/1 Month",
      features: [
        "25 Classes",
        "5 Teachers",
        "200 Students",
        "10 Tests",
        "Basic Support",
      ],
      button: "choose the plan",
      type: "normal",
    },
    {
      name: "Professional",
      price: "₹4,500",
      duration: "/3 Months",
      features: [
        "Unlimited Classes",
        "15 Teachers",
        "500 Students",
        "50 Tests",
        "Priority Support",
        "Advanced Analytics",
      ],
      button: "choose the plan",
      type: "normal",
    },
    {
      name: "Enterprise",
      price: "₹8,000",
      duration: "/6 Months",
      features: [
        "Unlimited Classes",
        "Unlimited Teachers",
        "1000+ Students",
        "Unlimited Tests",
        "24/7 Support",
        "Advanced Analytics",
        "Custom Branding",
      ],
      button: "choose the plan",
      type: "normal",
    },
  ];

  return (
    <>
     <Navbar/>
    <div className="pricing-wrapper">
      

      <h1 className="pricing-title">Simple, Transparent Pricing for Every Institute</h1>
      <p className="pricing-sub">
        Choose a plan that fits your institute’s size and testing needs. Upgrade anytime as your classes, teachers, or students grow.
      </p>

      <div className="pricing-container">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`price-card ${plan.type === "recommended" ? "highlight" : ""}`}
          >
            {plan.type === "recommended" && (
              <div className="recommended-badge">Recommended</div>
            )}

            <h2>{plan.name}</h2>

            <div className="price-area">
              <span className="price">{plan.price}</span>
              <span className="duration">{plan.duration}</span>
            </div>

            <ul className="features">
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            <button className={plan.type === "recommended" ? "btn-primary" : "btn-outline"}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
   
    
  );
};

export default Price;
