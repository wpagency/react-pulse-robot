
import React, { useEffect, useRef } from "react";
import { ArrowRight, Phone, FileText, Code, Rocket, GraduationCap } from "lucide-react";

const processSteps = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Discovery Call",
    description: "We learn about your business goals, audience, and project requirements",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Strategy & Quote",
    description: "Receive a custom roadmap and transparent pricing within 24 hours",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development",
    description: "Your site is built with weekly updates and review opportunities",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch",
    description: "Comprehensive testing and optimization before going live",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Support & Growth",
    description: "Ongoing maintenance and performance-focused improvements",
  }
];

const ProcessSection = () => {
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" id="process" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-purple-700 text-sm font-medium mb-6 shadow-sm">
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Result-Driven Sites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step process ensures your WordPress project delivers measurable business results
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white animate-on-scroll opacity-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to grow your business with WordPress?</h3>
              <p className="text-white/90 text-lg">Get started with a free 30-minute consultation and website audit.</p>
            </div>
            <a 
              href="mailto:hello@example.com" 
              className="whitespace-nowrap flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
            >
              Schedule Your Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;


