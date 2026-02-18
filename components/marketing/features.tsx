import Link from "next/link";

import { featuresConfig } from "@/config/marketing";

import Container from "../global/container";
import SectionHeading from "../global/section-heading";

export default function FeaturesSection() {
  return (
    <Container>
      <SectionHeading heading="FEATURES" />
      <div className="grid grid-cols-1 divide-x divide-y md:grid-cols-3 md:divide-y-0">
        {featuresConfig.map((item, index) => (
          <div key={index} className="flex items-center justify-center p-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <item.icon size={34} />
              <h2 className="text-xl">{item.heading}</h2>
              <p className="text-muted-foreground text-sm">{item.para}</p>
              <Link href="#" className="text-accent">
                {item.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
