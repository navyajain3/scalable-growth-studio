import { useEffect } from "react";

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  category?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  image = "https://scalkit.com/og-image.png",
  datePublished,
  dateModified,
  author = "ScalKit",
  category,
}: ArticleSchemaProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "article-schema";
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": image,
      "url": url,
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "author": {
        "@type": "Organization",
        "name": author,
        "url": "https://scalkit.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "ScalKit",
        "url": "https://scalkit.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://scalkit.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url,
      },
      ...(category && { "articleSection": category }),
    };
    
    script.textContent = JSON.stringify(schema);
    
    // Remove existing article schema if present
    const existing = document.getElementById("article-schema");
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const element = document.getElementById("article-schema");
      if (element) {
        element.remove();
      }
    };
  }, [title, description, url, image, datePublished, dateModified, author, category]);

  return null;
}
