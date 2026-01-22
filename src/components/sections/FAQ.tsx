import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedHeading } from "@/components/ui/animated-heading";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across a range of industries including tech, wellness, healthcare, education, real estate, finance, entertainment, and retail. While our experience spans sectors, every project is led by specialists who take the time to deeply understand your market, audience, and competitive landscape before execution begins.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on scope, complexity, and collaboration, but most projects are completed within 2–6 weeks. We define clear milestones upfront so expectations are aligned from day one and progress stays predictable throughout the engagement.",
  },
  {
    question: "Can I hire you for a single service?",
    answer:
      "Absolutely. You don’t need to commit to a full suite of services. We integrate seamlessly with your existing team and take ownership of exactly what you need, whether that’s design, content, development, or strategy, without unnecessary layers or long-term commitments.",
  },
  {
    question: "How are projects priced, and do you offer ongoing support?",
    answer:
      "Every project is scoped intentionally based on your goals and requirements, with clear, upfront pricing before we begin. Ongoing support isn’t bundled by default, it’s discussed transparently based on what you need post-launch. For brands seeking continued momentum, we offer flexible monthly partnerships that cover optimization, updates, maintenance, and creative support.",
  },
  {
    question: "Why should I choose ScalKit over building an in-house team?",
    answer:
      "Our clients value senior expertise without the overhead of hiring full-time. Instead of managing multiple roles or paying for downtime, they get access to experienced designers, developers, and strategists, exactly when they need it, and always aligned to clear outcomes.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex p-[1px] rounded-full bg-gradient-to-r from-violet-500 to-purple-500 mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-background text-foreground text-xs font-medium uppercase tracking-wider">
              FAQs
            </span>
          </div>
          <AnimatedHeading as="h2" className="heading-lg mb-4">
            Got Questions? We've Got You Covered
          </AnimatedHeading>
          <p className="body-lg text-muted-foreground">Everything you need to know before we get started.</p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glow-card border-none px-6 animate-slide-up [animation-fill-mode:backwards]"
                style={{ animationDelay: `${0.08 * (index + 1)}s` }}
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
