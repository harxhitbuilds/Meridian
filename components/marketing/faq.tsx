"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqConfig } from "@/config/marketing";

import Container from "../global/container";
import SectionHeading from "../global/section-heading";

export default function FAQSection() {
  return (
    <Container>
      <SectionHeading heading="FREQUENTLY ASKED QUESTIONS" />
      <div className="">
        <Accordion type="single" collapsible className="w-full">
          {faqConfig.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border-b pl-6"
            >
              <AccordionTrigger className="text-left text-sm font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p">
                <p className="text-muted-foreground text-sm">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
