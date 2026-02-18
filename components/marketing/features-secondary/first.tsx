"use client";

import { IconBrain, IconDatabase, IconSearch } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function FirstCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div
        className="bg-muted flex min-h-44 w-full items-center justify-center rounded-t-xl mask-b-from-6"
        style={{ perspective: 900 }}
      >
        <div className="flex gap-4">
          <motion.div
            initial={{ rotate: 6 }}
            whileHover={{ rotate: 12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ transformOrigin: "50% 50%" }}
            className="flex h-24 w-24 items-center justify-center rounded-xl border border-accent bg-black/60 will-change-transform"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-black">
              <IconSearch size={20} />
            </div>
          </motion.div>

          <motion.div
            initial={{ rotate: -6 }}
            whileHover={{ rotate: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ transformOrigin: "50% 50%" }}
            className="flex h-24 w-24 items-center justify-center rounded-xl border border-accent bg-black/60 will-change-transform"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-black">
              <IconBrain size={20} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconDatabase />
          <h2>Context-Aware Memory</h2>
        </div>
        <p className="text-muted-foreground text-xs">
          Agents that remember user preferences across sessions, enabling truly
          personalized automation.
        </p>
      </div>
    </div>
  );
}
