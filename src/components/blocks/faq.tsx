import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Snitch completely free?",
    answer: "Yes! Snitch is 100% free and open-source under the MIT license. There are no subscriptions, no trials, no paywalls, and no hidden fees.",
  },
  {
    question: "Can I use Snitch for commercial projects?",
    answer: "Yes, you can use Snitch for both personal and commercial work without any restrictions or licenses needed.",
  },
  {
    question: "What platforms does Snitch support?",
    answer: "Web (all modern browsers), macOS (Intel & Apple Silicon), Windows (portable), and Linux (AppImage). Same rich feature set everywhere.",
  },
  {
    question: "Does Snitch upload or track my data?",
    answer: "No. Everything runs 100% locally in your browser/machine. Zero telemetry, no cloud tracking, and no accounts required. Your screen stays completely yours.",
  },
  {
    question: "How do I get started?",
    answer: "Just open Snitch in your browser or launch the desktop app, capture your screen, add annotations, and copy or save instantly.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Everything you need to know about Snitch.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/40 px-2 py-1">
              <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
