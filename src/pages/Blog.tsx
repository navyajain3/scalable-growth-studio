import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/data/articles";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema } from "@/components/ArticleSchema";

export default function Blog() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="section-padding container-wide text-center">
          <h1 className="heading-lg mb-4">Article Not Found</h1>
          <p className="body-lg text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/#insights"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${article.title} | ScalKit Insights`}
        description={article.excerpt}
        url={`https://scalkit.com/blog/${article.id}`}
        type="article"
        publishedTime={article.date}
        keywords={[article.category, article.domain, "digital agency", "marketing"]}
      />
      <ArticleSchema
        title={article.title}
        description={article.excerpt}
        url={`https://scalkit.com/blog/${article.id}`}
        datePublished={article.date}
        category={article.category}
      />
      <Navbar />
      
      <article className="section-padding">
        <div className="container-wide max-w-3xl">
          {/* Back Link */}
          <Link
            to="/#insights"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {/* Article Header */}
          <header className="mb-12 animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {article.category}
            </span>
            <h1 className="heading-xl mb-6">{article.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>{article.readTime}</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-in [animation-delay:0.1s]">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return null; // Skip main title as we render it above
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="heading-md mt-12 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="heading-sm mt-8 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold text-foreground mt-6 mb-2">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (paragraph.trim() === '') {
                return null;
              }
              return (
                <p key={index} className="body-md text-muted-foreground mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Back to Insights CTA */}
          <div className="mt-16 pt-12 border-t border-border">
            <Link
              to="/#insights"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
