
import React, { useEffect, useRef, useState } from "react";
import { Code, Palette, Search, Zap, Shield, Smartphone, ShoppingCart, Users, ChevronDown, ChevronUp } from "lucide-react";

interface ServiceFeature {
  feature: string;
  included: boolean;
}

interface ServiceDetails {
  pricing: string;
  timeline: string;
  deliverables: string[];
  features: ServiceFeature[];
}

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom WordPress Development",
    description: "Tailored WordPress solutions built from the ground up to match your unique business needs and brand identity.",
    shortFeatures: ["Custom Theme Development", "Plugin Development", "Performance Optimization"],
    details: {
      pricing: "Starting from $2,500",
      timeline: "2-4 weeks",
      deliverables: [
        "100% custom WordPress theme",
        "Mobile-responsive design",
        "Admin training & documentation",
        "3 months free support"
      ],
      features: [
        { feature: "Custom Post Types", included: true },
        { feature: "Advanced Custom Fields", included: true },
        { feature: "Multi-language Support", included: false },
        { feature: "WooCommerce Integration", included: false }
      ]
    }
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "WordPress Design & UX",
    description: "Beautiful, conversion-focused designs that create memorable user experiences and drive business results.",
    shortFeatures: ["UI/UX Design", "Responsive Design", "Brand Integration"],
    details: {
      pricing: "Starting from $1,800",
      timeline: "1-3 weeks",
      deliverables: [
        "Custom design mockups",
        "Mobile & tablet layouts",
        "Style guide & brand kit",
        "Unlimited revisions"
      ],
      features: [
        { feature: "Custom Graphics", included: true },
        { feature: "Logo Design", included: false },
        { feature: "Brand Strategy", included: false },
        { feature: "Print Materials", included: false }
      ]
    }
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Performance",
    description: "Lightning-fast websites optimized for search engines to maximize your online visibility and rankings.",
    shortFeatures: ["Technical SEO", "Page Speed Optimization", "Core Web Vitals"],
    details: {
      pricing: "Starting from $1,200",
      timeline: "2-3 weeks",
      deliverables: [
        "Complete SEO audit",
        "Technical optimization",
        "Google Analytics setup",
        "Monthly SEO reports"
      ],
      features: [
        { feature: "Keyword Research", included: true },
        { feature: "Local SEO", included: true },
        { feature: "Link Building", included: false },
        { feature: "Content Writing", included: false }
      ]
    }
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description: "Powerful WooCommerce stores that convert visitors into customers with seamless shopping experiences.",
    shortFeatures: ["WooCommerce Setup", "Payment Integration", "Inventory Management"],
    details: {
      pricing: "Starting from $3,500",
      timeline: "3-6 weeks",
      deliverables: [
        "Complete WooCommerce store",
        "Payment gateway integration",
        "Inventory management system",
        "Order management training"
      ],
      features: [
        { feature: "Multi-currency Support", included: true },
        { feature: "Advanced Analytics", included: true },
        { feature: "Subscription Products", included: false },
        { feature: "Multi-vendor Marketplace", included: false }
      ]
    }
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your WordPress site secure, updated, and performing at its best.",
    shortFeatures: ["Security Updates", "Regular Backups", "24/7 Monitoring"],
    details: {
      pricing: "Starting from $150/month",
      timeline: "Ongoing",
      deliverables: [
        "Weekly security scans",
        "Automated backups",
        "Plugin & theme updates",
        "Monthly performance reports"
      ],
      features: [
        { feature: "Emergency Support", included: true },
        { feature: "Content Updates", included: true },
        { feature: "Design Changes", included: false },
        { feature: "New Feature Development", included: false }
      ]
    }
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Optimization",
    description: "Mobile-first approach ensuring your website looks and performs perfectly on all devices and screen sizes.",
    shortFeatures: ["Responsive Design", "Mobile Performance", "Touch Optimization"],
    details: {
      pricing: "Starting from $900",
      timeline: "1-2 weeks",
      deliverables: [
        "Mobile-responsive design",
        "Touch-friendly navigation",
        "Mobile speed optimization",
        "Cross-device testing"
      ],
      features: [
        { feature: "Progressive Web App", included: false },
        { feature: "Offline Functionality", included: false },
        { feature: "Push Notifications", included: false },
        { feature: "App Store Submission", included: false }
      ]
    }
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Membership Sites",
    description: "Create exclusive member areas with subscription management, content restrictions, and user dashboards.",
    shortFeatures: ["User Registration", "Content Protection", "Payment Processing"],
    details: {
      pricing: "Starting from $2,800",
      timeline: "3-5 weeks",
      deliverables: [
        "Custom membership portal",
        "User dashboard & profiles",
        "Payment & subscription system",
        "Content access controls"
      ],
      features: [
        { feature: "Multiple Membership Levels", included: true },
        { feature: "Course Integration", included: true },
        { feature: "Community Features", included: false },
        { feature: "Advanced Analytics", included: false }
      ]
    }
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "WordPress Migration",
    description: "Seamlessly migrate your existing website to WordPress with zero downtime and improved performance.",
    shortFeatures: ["Data Migration", "Zero Downtime", "SEO Preservation"],
    details: {
      pricing: "Starting from $750",
      timeline: "1-2 weeks",
      deliverables: [
        "Complete site migration",
        "URL redirects setup",
        "SEO preservation",
        "Content optimization"
      ],
      features: [
        { feature: "Database Migration", included: true },
        { feature: "Email Migration", included: false },
        { feature: "Hosting Setup", included: false },
        { feature: "Training & Support", included: true }
      ]
    }
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="animate-on-scroll opacity-0 group p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
         style={{ animationDelay: `${0.1 * index}s` }}>
      <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      
      <ul className="space-y-2 mb-6">
        {service.shortFeatures.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-purple-600">{service.details.pricing}</span>
        <span className="text-sm text-gray-500">{service.details.timeline}</span>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-700 font-medium"
      >
        View Details
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-100 animate-fade-in">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
              <ul className="space-y-1">
                {service.details.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
              <ul className="space-y-1">
                {service.details.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                      feature.included ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                    <span className={feature.included ? 'text-gray-600' : 'text-gray-400'}>
                      {feature.feature}
                    </span>
                    {!feature.included && <span className="ml-2 text-xs text-gray-400">(Add-on)</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="py-20 bg-white" id="services" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete WordPress Solutions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">For Every Business Need</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom development to ongoing maintenance, we provide comprehensive WordPress services 
            with transparent pricing and guaranteed results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. Let's discuss your specific requirements and create a tailored WordPress solution.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


