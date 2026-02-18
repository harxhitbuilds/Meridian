import { IconRobotFace } from "@tabler/icons-react";
import { IconBrandTinderFilled, IconClipboard } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function SixthCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div className="bg-muted flex min-h-44 w-full items-center justify-center rounded-t-xl mask-b-from-6">
        <div className="relative inline-flex flex-col items-center gap-8 py-4">
          <div className="border-accent bg-muted z-20 flex h-14 w-34 items-center justify-center gap-4 rounded-sm border">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white text-black">
              <IconClipboard size={20} />
            </div>
            <div className="bg-muted-foreground h-2 w-14 rounded-sm" />
          </div>

          <div className="border-accent bg-muted z-20 flex h-14 w-34 items-center justify-center gap-4 rounded-sm border">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white text-black">
              <IconBrandTinderFilled size={20} />
            </div>
            <div className="bg-muted-foreground h-2 w-14 rounded-sm" />
          </div>

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="50"
              y1="28"
              x2="50"
              y2="72"
              stroke="rgba(148,163,184,0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <line
              x1="42"
              y1="28"
              x2="50"
              y2="28"
              stroke="rgba(148,163,184,0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="50"
              y1="72"
              x2="58"
              y2="72"
              stroke="rgba(148,163,184,0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <motion.div
            style={{ left: "50%" }}
            className="bg-accent absolute h-3 w-3 -translate-x-1/2 rounded-full shadow-lg"
            animate={{ top: ["28%", "72%"] }}
            transition={{
              duration: 1.2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconRobotFace />
          <h2>Agentic AI</h2>
        </div>
        <p className="text-muted-foreground text-xs">
          Build autonomous agents that can reason, plan, and execute complex
          tasks using context.
        </p>
      </div>
    </div>
  );
}
