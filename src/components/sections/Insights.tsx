import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

// Placeholder gradient backgrounds for article cards
const cardBackgrounds = [
  "bg-gradient-to-br from-cyan-100 via-pink-100 to-rose-100",
  "bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100",
  "bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100",
  "bg-gradient-to-br from-orange-100 via-rose-100 to-pink-100",
  "bg-gradient-to-br from-violet-100 via-pink-100 to-rose-100",
  "bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100",
];

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
              className="group flex flex-col animate-fade-in [animation-fill-mode:backwards]"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
            {/* Image Container */}
            <div 
              className={`aspect-[4/3] rounded-2xl overflow-hidden ${cardBackgrounds[index % cardBackgrounds.length]} transition-transform duration-300 group-hover:scale-[1.02]`}
            >
              {article.image ? (
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {/* Abstract placeholder icon/shape could go here */}
                </div>
              )}
            </div>

            {/* Content Tile */}
            <div className="mt-4 p-4 rounded-xl bg-muted/30 backdrop-blur-sm border border-border/30">
              <span className="text-sm text-muted-foreground block mb-2">
                {article.domain}
              </span>
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
