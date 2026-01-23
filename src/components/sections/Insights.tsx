import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { useInsightsParallax } from "@/hooks/useGSAPScrollAnimations";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";
import { Lightbulb } from "lucide-react";

// Placeholder gradient backgrounds for article cards (violet to magenta theme)
const cardBackgrounds = [
  "bg-gradient-to-br from-[#501ed4]/10 via-[#7e56e2]/10 to-[#501ed4]/5",
  "bg-gradient-to-br from-[#7e56e2]/10 via-[#501ed4]/10 to-[#7e56e2]/5",
  "bg-gradient-to-br from-[#501ed4]/15 via-[#7e56e2]/10 to-[#501ed4]/5",
  "bg-gradient-to-br from-[#7e56e2]/15 via-[#501ed4]/10 to-[#7e56e2]/5",
  "bg-gradient-to-br from-[#501ed4]/10 via-[#7e56e2]/15 to-[#501ed4]/10",
  "bg-gradient-to-br from-[#7e56e2]/10 via-[#501ed4]/15 to-[#7e56e2]/10",
];

export function Insights() {
  // Initialize parallax
  useInsightsParallax();
  return (
    <section id="insights" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-header">
          <ShimmerBadge className="mb-6">Insights</ShimmerBadge>
          <h2 className="heading-lg mb-4">Latest Thoughts from the Studio</h2>
          <p className="body-lg text-muted-foreground">
            Explore our perspectives on design, growth, and building brands that last.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto reveal-cards auto-rows-fr">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group insight-card reveal-card"
            >
              {/* Unified Card Tile */}
              <div className="h-full rounded-2xl bg-muted/30 backdrop-blur-sm border border-border/30 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] flex flex-col">
                {/* Image */}
                <div className={`aspect-[4/3] flex-shrink-0 ${cardBackgrounds[index % cardBackgrounds.length]}`}>
                  {article.image ? (
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Abstract placeholder icon/shape could go here */}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow min-h-[120px]">
                  <span className="text-sm text-muted-foreground block mb-2">{article.domain}</span>
                  <h3 className="text-lg font-medium group-hover:text-[#7e56e2] transition-colors leading-snug line-clamp-3">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
