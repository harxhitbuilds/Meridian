import { IconSolarElectricity, IconUserCheck } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function ThirdCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div className="bg-muted flex min-h-44 w-full items-center justify-center rounded-t-xl mask-b-from-6">
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <div className="border-border relative flex h-24 w-24 items-center justify-center rounded-full border">
              <motion.div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                style={{ transformOrigin: "50% 50%" }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                aria-hidden
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent block h-2 w-2 rounded-full" />
                </div>
              </motion.div>

              <div className="border-border relative flex h-18 w-18 items-center justify-center rounded-full border">
                <motion.div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  style={{ transformOrigin: "50% 50%" }}
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  aria-hidden
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-accent block h-2 w-2 rounded-full" />
                  </div>
                </motion.div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-3">
                  <IconSolarElectricity className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconUserCheck />
          <h2>Customer Support</h2>
        </div>
        <p className="text-muted-foreground text-xs">
          Add human touch to your chatbots with memory so it retains context.
        </p>
      </div>
    </div>
  );
}
