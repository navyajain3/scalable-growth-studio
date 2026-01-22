import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export function Insights() {
  return (
    <section id="insights" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6">
            Insights
          </span>
          <h2 className="heading-lg mb-4">
            Latest thoughts from the studio
          </h2>
          <p className="body-lg text-muted-foreground">
            Explore our perspectives on design, growth, and building brands that last.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group glow-card glow-border hover-lift p-6 flex flex-col animate-fade-in [animation-fill-mode:backwards]"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              {/* Category & Read Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium mb-3 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-1">
                {article.excerpt}
              </p>

              {/* Read More */}
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                Read article
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
