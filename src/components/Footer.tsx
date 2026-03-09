
import React from "react";
import { Globe, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Pulse Robot</h3>
                <p className="text-sm text-gray-600">Pulse Robot</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Data-driven WordPress development and optimization services for businesses that want measurable results.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Custom WordPress Development",
                "WooCommerce Stores",
                "Performance Optimization",
                "SEO & Analytics",
                "Website Maintenance"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                "Case Studies",
                "Blog",
                "WordPress Guides",
                "Performance Checklist",
                "Website Audit Tool"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@wpagency.xyz"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                hello@wpagency.xyz
              </a>
              <a
                href="mailto:hello@wpagency.xyz"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-all duration-200 group"
              >
                Get Your Free Website Audit
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Pulse Robot. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <p className="text-gray-500 text-xs">
                Built with ♥ by{' '}
                <a href="https://wpagency.xyz" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                  WP Agency
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


