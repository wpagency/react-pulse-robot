import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getBlogPost, formatDate } from "@/lib/blogUtils";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Parse markdown-style content into JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let inCTASection = false;
    
    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {currentList.map((item, idx) => {
              // Parse bold text in list items
              const parts = item.split(/\*\*(.*?)\*\*/g);
              return (
                <li key={idx}>
                  {parts.map((part, partIdx) => 
                    partIdx % 2 === 1 ? 
                      <strong key={partIdx} className="font-semibold text-foreground">{part}</strong> : 
                      part
                  )}
                </li>
              );
            })}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // Skip the first title (duplicate) and handle CTA sections
      if (trimmed === '---') {
        if (!inCTASection) {
          inCTASection = true;
          return; // Start of CTA section
        } else {
          inCTASection = false;
          return; // End of CTA section
        }
      }
      
      // Skip content inside CTA sections (we'll handle CTAs separately)
      if (inCTASection) {
        return;
      }
      
      if (trimmed.startsWith('# ')) {
        // Skip the first h1 since we already have it in the header
        if (index === 0 || elements.length === 0) {
          return;
        }
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
            {trimmed.slice(2)}
          </h2>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-semibold text-foreground mb-4 mt-8">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-semibold text-foreground mb-3 mt-6">
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed.startsWith('- **') || trimmed.startsWith('- ')) {
        currentList.push(trimmed.slice(2));
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length > 4) {
        flushList();
        elements.push(
          <p key={index} className="text-lg font-bold text-foreground mb-4">
            {trimmed.slice(2, -2)}
          </p>
        );
      } else if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('✅') && !trimmed.startsWith('📩')) {
        flushList();
        // Parse bold text in paragraphs
        const parts = trimmed.split(/\*\*(.*?)\*\*/g);
        elements.push(
          <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
            {parts.map((part, partIdx) => 
              partIdx % 2 === 1 ? 
                <strong key={partIdx} className="font-semibold text-foreground">{part}</strong> : 
                part
            )}
          </p>
        );
      }
    });
    
    flushList();
    return elements;
  };

  // Extract CTA content from the blog post
  const extractCTAFromContent = (content: string) => {
    const lines = content.split('\n');
    let inCTASection = false;
    let ctaLines: string[] = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed === '---') {
        if (!inCTASection) {
          inCTASection = true;
          continue;
        } else {
          break;
        }
      }
      if (inCTASection && trimmed) {
        ctaLines.push(trimmed);
      }
    }
    
    if (ctaLines.length >= 2) {
      const title = ctaLines[0].replace(/^\*\*(.*?)\*\*/, '$1');
      const description = ctaLines[1].replace(/📩 Email us:.*/, '').trim();
      return {
        title,
        description,
        buttonText: "Email Us",
        link: "mailto:support@yourhandle"
      };
    }
    
    return null;
  };

  const getCTAContent = () => {
    const extractedCTA = extractCTAFromContent(post.content);
    if (extractedCTA) {
      return extractedCTA;
    }
    
    // Fallback CTAs
    switch (post.slug) {
      case 'custom-vs-templates':
        return {
          title: "Ready to Stop Compromising?",
          description: "Get a custom WordPress site that actually converts and grows with your business.",
          buttonText: "Email Us",
          link: "mailto:support@yourhandle"
        };
      case 'wordpress-site-speed':
        return {
          title: "Speed Up Your Site Today",
          description: "Get a comprehensive speed audit and optimization plan tailored to your WordPress site.",
          buttonText: "Email Us",
          link: "mailto:support@yourhandle"
        };
      case 'emergency-fixes':
        return {
          title: "Site Down? We're Here to Help",
          description: "Our emergency response team is standing by 24/7 to get your WordPress site back online fast.",
          buttonText: "Email Us",
          link: "mailto:support@yourhandle"
        };
      default:
        return {
          title: "Ready to Get Started?",
          description: "Let's discuss how we can help optimize and grow your WordPress site.",
          buttonText: "Email Us",
          link: "mailto:support@yourhandle"
        };
    }
  };

  const ctaContent = getCTAContent();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Back Navigation */}
      <div className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar size={16} />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.description}
            </p>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground">
            {renderContent(post.content)}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {ctaContent.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {ctaContent.description}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href={ctaContent.link} className="inline-flex items-center gap-2">
                {ctaContent.buttonText}
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;

