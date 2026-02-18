"use client";

import { IconReportAnalytics } from "@tabler/icons-react";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

const BAR_COUNT = 5;

function randInt(min = 30, max = 95) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function SecondCard() {
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: BAR_COUNT }, () => randInt()),
  );

  useEffect(() => {
    const id = setInterval(
      () => {
        setHeights((prev) => prev.map(() => randInt()));
      },
      700 + Math.floor(Math.random() * 1000),
    );

    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-8 px-4 py-8">
      <div className="bg-muted flex min-h-44 w-full items-center justify-center rounded-t-xl mask-b-from-6">
        <div
          className="flex h-28 w-44 items-end justify-center gap-2"
          aria-hidden
        >
          {heights.map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 0.5 + Math.random() * 0.6,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "bottom" }}
              className="bg-accent w-3 rounded-t-xs"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconReportAnalytics />
          <h2>Real-time Sync</h2>
        </div>
        <p className="text-muted-foreground text-xs">
          Ensure your data is always up-to-date. Seamlessly sync information
          across teams and applications in real-time.
        </p>
      </div>
    </div>
  );
}
