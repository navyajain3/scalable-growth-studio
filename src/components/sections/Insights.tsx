import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Why People Leave Your Website in 10 Seconds",
    category: "UX Design",
  },
  {
    title: "The Untapped Goldmine: LinkedIn",
    category: "Marketing",
  },
  {
    title: "Psychology of Selling on Instagram",
    category: "Social Media",
  },
  {
    title: "Why People Trust Founders More Than Brands",
    category: "Branding",
  },
  {
    title: "How AI Is Changing the Way We Design",
    category: "Technology",
  },
];

export function Insights() {
  return (
    <section id="insights" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Latest thoughts from the studio
          </h2>
        </div>

        {/* Articles List */}
        <div className="max-w-3xl mx-auto divide-y divide-border">
          {articles.map((article, index) => (
            <a
              key={article.title}
              href="#"
              className="group flex items-center justify-between py-6 hover:px-4 transition-all duration-300 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <div>
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="text-lg font-medium mt-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
