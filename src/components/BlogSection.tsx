
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/blogUtils";

const BlogSection = () => {
  const [posts, setPosts] = useState(getBlogPosts().slice(0, 5));
  
  return (
    <section className="py-20 bg-background" id="insights">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <span>Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            WordPress Expertise <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">You Can Actually Use</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Actionable WordPress advice from our development team to help you build, optimize and maintain better websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
              <a 
              key={index} 
              href={`/blog/${post.slug}`}
              className="group animate-on-scroll opacity-0 flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={`Read article: ${post.title}`}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.coverAlt || post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="225"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <time className="text-sm text-muted-foreground mb-2" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center font-medium text-primary mt-auto">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog"
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Insights
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


