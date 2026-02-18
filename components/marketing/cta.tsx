import { IconBrandX } from "@tabler/icons-react";

import { ctaConfig } from "@/config/marketing";

import Container from "../global/container";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <Container className="flex items-center justify-center py-24 text-center">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">{ctaConfig.heading}</h2>
        <p className="text-muted-foreground max-w-xl text-lg">
          {ctaConfig.description}
        </p>
        <p className="text-accent">{ctaConfig.para}</p>
        <Button className="border-accent/20 cursor-pointer border bg-transparent py-6 text-white hover:bg-transparent">
          <IconBrandX />
          {ctaConfig.button}
        </Button>
      </div>
    </Container>
  );
}
