import { testimonialsConfig } from "@/config/marketing";

import Container from "../global/container";
import SectionHeading from "../global/section-heading";
import TestimonialCard from "../global/testimonial-card";

export default function TestimonialsSection() {
  return (
    <Container>
      <SectionHeading heading="TESTIMONIALS" />

      <div className="">
        <div className="grid grid-cols-1 divide-x divide-y md:grid-cols-3">
          {testimonialsConfig.tweets.map((card, idx) => (
            <div key={idx} className="break-inside-avoid">
              <TestimonialCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
