import Image from "next/image";

import { dashboardConfig } from "@/config/demo";

import Container from "../global/container";

export default function DemoSection() {
  return (
    <Container>
      <div className="bg-muted/40 relative flex items-center justify-center p-4 md:p-12">
        <div className="bg-accent absolute top-0 -left-1 h-2 w-2" />
        <div className="bg-accent absolute top-0 -right-1 h-2 w-2" />
        <div className="bg-accent absolute bottom-0 -left-1 h-2 w-2" />
        <div className="bg-accent absolute -right-1 bottom-0 h-2 w-2" />
        <video
          loop
          autoPlay
          muted
          playsInline
          src={dashboardConfig.image.src}
          width={dashboardConfig.image.width}
          height={dashboardConfig.image.height}
          className="border-border rounded-xl border-4"
        />
      </div>
    </Container>
  );
}
