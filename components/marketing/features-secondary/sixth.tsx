import { IconRobotFace } from "@tabler/icons-react";

export default function SixthCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div className="bg-muted min-h-44 w-full rounded-t-xl mask-b-from-6"></div>

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
