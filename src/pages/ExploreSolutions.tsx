import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import SkipToContent from "@/components/SkipToContent";
import Footer from "@/components/Footer";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ExploreSolutions = () => {
  useEffect(() => {
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    // Setup smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      
      const offset = window.innerWidth < 768 ? 100 : 80;
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center max-w-4xl mx-auto animate-on-scroll opacity-0">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-border text-primary text-sm font-semibold mb-8 shadow-lg hover-scale">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Complete WordPress Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Explore Our Solutions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Discover comprehensive WordPress services designed to elevate your business. 
              From custom development to ongoing maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <main id="main-content" className="space-y-0">
        <WhyChooseUsSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ExploreSolutions;

