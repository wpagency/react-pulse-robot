
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Zap, ChartBarIcon, BarChart } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-gray-50 via-white to-purple-50" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 60px' : '120px 20px 80px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-br from-purple-200/30 to-blue-200/30 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <Zap className="w-4 h-4 mr-2" />
              <span>Data-Driven WordPress Agency</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight opacity-0 animate-fade-in text-gray-900" 
              style={{ animationDelay: "0.3s" }}
            >
              WordPress Sites That<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Drive Results</span>
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="text-xl text-gray-600 mt-6 mb-8 leading-relaxed opacity-0 animate-fade-in max-w-lg"
            >
              We build WordPress websites that aren't just beautiful-they're engineered to convert visitors, rank higher, and measurably grow your business.
            </p>

            {/* Pain Points */}
            <div 
              className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-lg font-semibold text-red-800 mb-3">The Hidden Cost of Bad WordPress Sites</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  67% of visitors leave if your site loads over 3 seconds
                </li>
                <li className="flex items-center text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Mobile users bounce 3× more on non-responsive sites
                </li>
                <li className="flex items-center text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Poorly optimized sites lose 70% of potential organic traffic
                </li>
              </ul>
            </div>

            {/* Trust Indicators */}
            <div 
              className="grid grid-cols-3 gap-6 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">94%</div>
                <div className="text-sm text-gray-600">Conversion Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">3.5s</div>
                <div className="text-sm text-gray-600">Faster Loading</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">87%</div>
                <div className="text-sm text-gray-600">Traffic Growth</div>
              </div>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.8s" }}
            >
              <a 
                href="mailto:hello@example.com" 
                className="flex items-center justify-center group bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Your Free Website Audit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-purple-600 hover:text-purple-600"
              >
                Our Services & Pricing
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div 
              className="relative z-10 animate-fade-in bg-white rounded-2xl shadow-2xl p-6" 
              style={{ animationDelay: "0.9s" }}
            >
              {/* Analytics Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-semibold text-gray-800">WordPress Analytics</div>
                  <div className="text-sm text-green-600 font-medium px-3 py-1 bg-green-100 rounded-full">+67% Growth</div>
                </div>
                
                {/* Main Chart */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <BarChart className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-medium text-gray-700">Monthly Conversions</span>
                    </div>
                    <div className="text-green-600 font-semibold">+94%</div>
                  </div>
                  
                  <div className="h-32 flex items-end space-x-2">
                    {[15, 25, 18, 30, 40, 50, 65, 70, 58, 63, 75, 90].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className={`w-full rounded-t-sm ${i > 5 ? 'bg-purple-600' : 'bg-gray-300'}`}
                          style={{ height: `${height}%` }}
                        ></div>
                        <div className="text-xs text-gray-500 mt-1">{i + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600">Bounce Rate</div>
                    <div className="text-xl font-bold text-blue-600">-49%</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600">Avg. Time</div>
                    <div className="text-xl font-bold text-green-600">3:42</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600">Mobile CTR</div>
                    <div className="text-xl font-bold text-purple-600">12.3%</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;



