
import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "TechStart Innovations",
    category: "SaaS Platform",
    description: "Modern WordPress site for a tech startup with custom integrations and advanced functionality.",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    results: {
      traffic: "+250%",
      conversions: "+180%",
      performance: "95/100"
    },
    technologies: ["WordPress", "Custom Theme", "WooCommerce", "Advanced SEO"]
  },
  {
    id: 2,
    title: "Green Valley Consulting",
    category: "Business Consulting",
    description: "Professional corporate website with lead generation focus and CRM integration.",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    results: {
      traffic: "+320%",
      conversions: "+200%",
      performance: "98/100"
    },
    technologies: ["WordPress", "Custom Development", "Lead Generation", "Analytics"]
  },
  {
    id: 3,
    title: "Artisan Marketplace",
    category: "E-commerce",
    description: "Multi-vendor marketplace built with WooCommerce, featuring advanced filtering and payment systems.",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    results: {
      traffic: "+180%",
      conversions: "+150%",
      performance: "94/100"
    },
    technologies: ["WooCommerce", "Multi-vendor", "Payment Gateway", "Mobile Optimization"]
  }
];

const categories = ["All", "SaaS Platform", "Business Consulting", "E-commerce"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
    <section className="py-20 bg-white" id="portfolio" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <span>Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WordPress Sites That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Deliver Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how we've helped businesses achieve their goals with custom WordPress solutions 
            that drive traffic, conversions, and growth.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Portfolio Item */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                  {filteredItems[activeItem]?.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {filteredItems[activeItem]?.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {filteredItems[activeItem]?.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {filteredItems[activeItem]?.results.traffic}
                    </div>
                    <div className="text-sm text-gray-600">Traffic Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {filteredItems[activeItem]?.results.conversions}
                    </div>
                    <div className="text-sm text-gray-600">Conversions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {filteredItems[activeItem]?.results.performance}
                    </div>
                    <div className="text-sm text-gray-600">Performance Score</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {filteredItems[activeItem]?.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center hover:shadow-lg transition-all duration-300">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src={filteredItems[activeItem]?.image} 
                    alt={filteredItems[activeItem]?.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll opacity-0">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                activeItem === index ? "ring-2 ring-purple-500" : ""
              }`}
              onClick={() => setActiveItem(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white">
                <div className="text-sm text-purple-600 font-medium mb-2">{item.category}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center mx-auto hover:shadow-lg transition-all duration-300">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


