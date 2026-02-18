import { IconLayersIntersect } from "@tabler/icons-react";
import { motion, scale } from "motion/react";

export default function FourthCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div className="bg-muted flex min-h-44 w-full items-center justify-center rounded-t-xl mask-b-from-6">
        <div className="relative inline-block">
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="border-border bg-muted z-20 flex h-14 w-14 items-center justify-center rounded-sm border"
            >
              <div className="bg-accent h-6 w-6 rounded-full" />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="border-border bg-muted z-20 flex h-14 w-14 items-center justify-center rounded-sm border"
            >
              <div className="bg-accent h-6 w-6 rounded-full" />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="border-border bg-muted z-20 flex h-14 w-14 items-center justify-center rounded-sm border"
            >
              <div className="bg-accent h-6 w-6 rounded-full" />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="border-border bg-muted z-20 flex h-14 w-14 items-center justify-center rounded-sm border"
            >
              <div className="bg-accent h-6 w-6 rounded-full" />
            </motion.div>
          </div>

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="10"
              y1="10"
              x2="90"
              y2="90"
              stroke="rgba(148,163,184,0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="90"
              y1="10"
              x2="10"
              y2="90"
              stroke="rgba(148,163,184,0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconLayersIntersect />
          <h2>Integrated Tooling</h2>
        </div>
        <p className="text-muted-foreground text-xs">
          Connect your existing stack with a single powerful API layer.
        </p>
      </div>
    </div>
  );
}
