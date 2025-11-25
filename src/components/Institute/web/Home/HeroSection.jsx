import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ChevronRight, BookOpen, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Discover Knowledge and Grow with Our Learning Platform",
      buttonText: "Explore Courses",
      buttonLink: "/courses",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Unlock Your Potential Through Engaging Online Learning Courses",
      buttonText: "Start Learning",
      buttonLink: "/student-login",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Empowering Educators to Teach Better Through Digital Tools",
      buttonText: "Teacher Login",
      buttonLink: "/teacher-login",
    }
  ];

  return (
    <section className="institute-hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} institute-hero-bullet"></span>`;
          },
        }}
        navigation={true}
        loop={true}
        className="institute-hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="institute-hero-slide">
            {/* Background Image with Overlay */}
            <div 
              className="institute-hero-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="institute-hero-overlay"></div>
            </div>
            
            {/* Content Layer */}
            <div className="institute-hero-container">
              <div className="institute-hero-content">
                {/* Main Text Content */}
                <div className="institute-hero-text">
                  <h1 className="institute-hero-title">
                    {slide.title}
                  </h1>
                 
                  {/* CTA Button */}
                  <div className="institute-hero-actions">
                    <a 
                      href={slide.buttonLink} 
                      className="institute-hero-btn institute-hero-btn-primary"
                    >
                      {slide.buttonText}
                      <ChevronRight size={20} />
                    </a>
                    <a 
                      href="/about" 
                      className="institute-hero-btn institute-hero-btn-secondary"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;