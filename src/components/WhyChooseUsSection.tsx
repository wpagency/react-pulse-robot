
import React, { useEffect } from "react";
import { ArrowRight, Code, Zap, Search, Shield, Smartphone, Users } from "lucide-react";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Custom WordPress Development",
    description: "Tailored from scratch to fit your brand, goals, and audience - clean, responsive, and optimized.",
    emoji: "🔧",
    serviceId: "custom-development"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Emergency WordPress Fixes",
    description: "Fixes for hacked sites, plugin errors, or full-on crashes - fast turnarounds guaranteed.",
    emoji: "🧯",
    serviceId: "emergency-fixes"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Speed & SEO Optimization",
    description: "Technical audits and Core Web Vitals upgrades to boost rankings and UX.",
    emoji: "⚡",
    serviceId: "seo-performance"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security & Maintenance Plans",
    description: "Stay protected with backups, monitoring, and monthly support.",
    emoji: "🛡️",
    serviceId: "maintenance-support"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "WordPress to Static Conversion",
    description: "Convert dynamic sites to static for unmatched speed, security, and SEO.",
    emoji: "🚀",
    serviceId: "static-conversion"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Custom Web App & Plugin Dev",
    description: "We build powerful tools that do more than look good - they solve real problems.",
    emoji: "🧠",
    serviceId: "web-app-development"
  }
];

const WhyChooseUsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleExploreClick = (serviceId: string) => {
    // Navigate to solutions page and scroll to specific service
    window.location.href = `/solutions#${serviceId}`;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-accent/20 to-background relative overflow-hidden" id="why-choose-us">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-border text-primary text-sm font-semibold mb-8 shadow-lg hover-scale">
            <span className="mr-2">⚡</span>
            <span>WordPress Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              WordPress Done Right
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From custom development to ongoing support, we deliver WordPress solutions that drive real business results with modern design and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 group bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl animate-bounce" style={{ animationDelay: `${0.2 * index}s` }}>
                  {service.emoji}
                </div>
                <div className="text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {service.description}
              </p>
              
              <button
                onClick={() => handleExploreClick(service.serviceId)}
                className="flex items-center gap-3 text-primary font-bold hover:text-accent transition-all duration-300 group/btn bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full"
              >
                <span className="text-lg">🚀</span>
                <span>Explore This Solution</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 animate-on-scroll opacity-0">
          <a 
            href="/solutions"
            className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
          >
            <span className="mr-3 text-xl">💎</span>
            View All Services & Pricing
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;



