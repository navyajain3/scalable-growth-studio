import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What industries do you work with?",
    answer: "We work across diverse industries including technology, e-commerce, healthcare, finance, education, and professional services. Our approach is tailored to each industry's unique challenges and opportunities.",
  },
  {
    question: "What are your typical project timelines?",
    answer: "Timelines vary based on project scope. A brand identity typically takes 4-6 weeks, a website 6-10 weeks, and comprehensive digital transformation projects 3-6 months. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    question: "Can I hire you for a single service?",
    answer: "Absolutely. While we offer comprehensive solutions, we're happy to work on individual services like website development, branding, or content strategy based on your specific needs.",
  },
  {
    question: "How does pricing work?",
    answer: "We offer project-based pricing tailored to scope and complexity. After our initial discovery call, we provide a detailed proposal with transparent pricing. We also offer retainer packages for ongoing partnerships.",
  },
  {
    question: "Why should I choose ScalKit over an in-house team?",
    answer: "ScalKit provides access to a full spectrum of expertise—design, development, strategy, and content—without the overhead of hiring multiple full-time specialists. You get a dedicated team that scales with your needs while we handle execution, so you can focus on running your business.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Got Questions? We've Got You Covered
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glow-card border-none px-6 opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.08 * (index + 1)}s` }}
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
