
import React, { useRef } from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Our new WordPress site exceeded all expectations. The team delivered a beautiful, fast-loading site that has increased our leads by 300% in just 3 months. Their attention to detail and technical expertise is outstanding.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Solutions",
    rating: 5,
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
  },
  {
    content: "Working with this WordPress agency was a game-changer for our business. They created a custom e-commerce solution that perfectly fits our needs and has significantly improved our online sales performance.",
    author: "Michael Chen",
    role: "CEO",
    company: "Green Valley Consulting",
    rating: 5,
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
  },
  {
    content: "The level of professionalism and expertise demonstrated throughout our project was impressive. Our WordPress site is not only visually stunning but also performs exceptionally well in search rankings.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Arts Studio",
    rating: 5,
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
  },
  {
    content: "From initial consultation to final launch, the process was smooth and transparent. They delivered exactly what they promised - a high-performance WordPress site that drives real business results.",
    author: "David Thompson",
    role: "Operations Manager",
    company: "Pacific Enterprises",
    rating: 5,
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
  }
];

const TestimonialCard = ({ content, author, role, company, rating, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-purple-200">
        <Quote className="w-8 h-8" />
      </div>
      
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed">{`"${content}"`}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-600 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" id="testimonials" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-purple-700 text-sm font-medium mb-6 shadow-sm">
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Say About Us</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses achieve their goals 
            with custom WordPress solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="opacity-0 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                ))}
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <p className="text-gray-600">
              Average rating from 50+ satisfied clients across various industries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


