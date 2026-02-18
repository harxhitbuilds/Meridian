import { statisticsConfig } from "@/config/marketing";

import Container from "../global/container";
import SectionHeading from "../global/section-heading";

export default function StatisticsSection() {
  return (
    <Container>
      <SectionHeading heading="STATISTICS" />
      <div className="grid grid-cols-2 divide-x divide-y md:grid-cols-4 md:divide-y-0">
        {statisticsConfig.map((item, index) => (
          <div key={index} className="flex items-center justify-center p-12">
            <div className="flex flex-col items-center gap-2">
              <p className="bg-linear-to-t from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent">
                {item.number}
              </p>
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
