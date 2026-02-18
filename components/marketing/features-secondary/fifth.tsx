import { IconBrain } from "@tabler/icons-react";

export default function FifthCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div className="bg-muted min-h-44 w-full rounded-t-xl mask-b-from-6"></div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconBrain />
          <h2>LLMs with Memory</h2>
        </div>
        <p className="text-muted-foreground text-xs">
          Empower Large Language Models with long-term memory for richer,
          continuous conversations.
        </p>
      </div>
    </div>
  );
}
