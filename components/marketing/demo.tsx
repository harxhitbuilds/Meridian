import Image from "next/image";

import { dashboardConfig } from "@/config/demo";

import Container from "../global/container";

export default function DemoSection() {
  return (
    <Container>
      <div className="bg-muted/40 flex items-center justify-center p-4 md:p-12">
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
