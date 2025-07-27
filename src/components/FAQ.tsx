import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Who We Are ?",
      answer: "We are a non-political, non-profit organization established to honor Martyr Dharma Bhakta Mathema. Our mission is to promote human rights, democracy, and public awareness across Nepal."
    },
    {
      question: "What We Do ?",
      answer: "From community media to youth engagement and historical archiving, we empower people with knowledge, voice, and platforms to influence positive change in society."
    },
    {
      question: "Why It Matters",
      answer: "We believe in a future where freedom, dignity, and justice are accessible to all. Our work ensures that the legacy of past heroes inspires action, education, and transformation today."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                Faq's
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy leading-tight">
                Our Mission Is to 
                <span className="text-primary block">Change The Nepal</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get answers to the most frequently asked questions about our foundation, mission, and impact on Nepal's democratic and social development.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foundation-navy hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};