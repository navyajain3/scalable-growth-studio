import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  keywords?: string[];
}

const defaultMeta = {
  title: "ScalKit | Digital Agency for Web Development, UI/UX Design & Marketing",
  description: "Full-service digital agency specializing in web development, UI/UX design, branding, and growth marketing for startups and enterprises.",
  image: "https://scalkit.com/og-image.png",
  url: "https://scalkit.com",
};

export function SEOHead({
  title = defaultMeta.title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = "website",
  publishedTime,
  author = "ScalKit",
  keywords = [],
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string, attribute = "content") => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement("meta");
        const [attrType, attrValue] = selector.replace("meta[", "").replace("]", "").split("=");
        element.setAttribute(attrType, attrValue.replace(/"/g, ""));
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // Update meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="author"]', author);
    
    if (keywords.length > 0) {
      updateMetaTag('meta[name="keywords"]', keywords.join(", "));
    }

    // Open Graph
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', image);
    updateMetaTag('meta[property="og:url"]', url);
    updateMetaTag('meta[property="og:type"]', type);

    // Twitter
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', image);
    updateMetaTag('meta[name="twitter:url"]', url);

    // Article specific
    if (type === "article" && publishedTime) {
      updateMetaTag('meta[property="article:published_time"]', publishedTime);
      updateMetaTag('meta[property="article:author"]', author);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = url;
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = url;
      document.head.appendChild(canonical);
    }
  }, [title, description, image, url, type, publishedTime, author, keywords]);

  return null;
}
