import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { useInsightsParallax } from "@/hooks/useGSAPScrollAnimations";

// Placeholder gradient backgrounds for article cards (violet to magenta theme)
const cardBackgrounds = [
  "bg-gradient-to-br from-cyan-100 via-pink-100 to-rose-100",
  "bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100",
  "bg-gradient-to-br from-[hsl(262_80%_88%)] via-[hsl(277_80%_88%)] to-[hsl(292_80%_88%)]",
  "bg-gradient-to-br from-orange-100 via-rose-100 to-pink-100",
  "bg-gradient-to-br from-[hsl(262_80%_88%)] via-pink-100 to-rose-100",
  "bg-gradient-to-br from-pink-100 via-[hsl(277_80%_88%)] to-[hsl(262_80%_88%)]",
];

export function Insights() {
  // Initialize parallax
  useInsightsParallax();
  return (
    <section id="insights" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-header">
          <div className="inline-flex p-[1px] rounded-full bg-gradient-to-r from-violet-500 to-purple-500 mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-background text-foreground text-xs font-medium uppercase tracking-wider">
              Insights
            </span>
          </div>
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
                  <h3 className="text-lg font-medium group-hover:text-violet-500 transition-colors leading-snug line-clamp-3">
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
