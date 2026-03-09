
import React, { useEffect, useRef, useState } from "react";
import { Zap, Shield, TrendingUp, Clock } from "lucide-react";

const WordPressValueSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          if (progress >= 0.75) {
            setActiveCardIndex(3);
          } else if (progress >= 0.5) {
            setActiveCardIndex(2);
          } else if (progress >= 0.25) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;
  const isFourthCardVisible = activeCardIndex >= 3;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '400vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-wordpress">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white mr-2">02</span>
                <span>Why Choose Us</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              WordPress Done Right
            </h2>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* Speed & Performance Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-500 to-emerald-600"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Speed & Performance</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Lightning-Fast WordPress Sites
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    We optimize every aspect of your WordPress site for speed. 2-second load times guaranteed or your money back.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Advanced caching & CDN setup
                    </div>
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Image optimization & lazy loading
                    </div>
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Database optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security & Maintenance Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Security & Maintenance</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Fort Knox-Level Security
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    Sleep soundly knowing your WordPress site is protected 24/7 with enterprise-grade security measures.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Daily automated backups
                    </div>
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Malware scanning & removal
                    </div>
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      SSL certificates & firewall protection
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* SEO & Growth Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '25px' : '15px' : '200px'}) scale(0.98)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500 to-pink-600"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">SEO & Growth</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Dominate Google Search Results
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    Our WordPress sites are built for SEO from day one. Watch your organic traffic soar within 90 days.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Technical SEO optimization
                    </div>
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Schema markup & meta optimization
                    </div>
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Local SEO for local businesses
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Support & Results Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFourthCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 40,
                transform: `translateY(${isFourthCardVisible ? '0' : '200px'}) scale(1)`,
                opacity: isFourthCardVisible ? 1 : 0,
                pointerEvents: isFourthCardVisible ? 'auto' : 'none'
              }}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-500 to-red-600"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Support & Results</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    <span className="text-yellow-300">24/7 Support</span> & Guaranteed Results
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    We don't just build your site and disappear. Get ongoing support and guaranteed improvements to your conversion rates.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      24-hour emergency response time
                    </div>
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Monthly performance reports
                    </div>
                    <div className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Conversion rate optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WordPressValueSection;


