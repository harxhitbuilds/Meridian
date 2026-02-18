import { IconBrain } from "@tabler/icons-react";

export default function FifthCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div className="bg-muted flex min-h-44 w-full flex-col items-center justify-center gap-4 rounded-t-xl mask-b-from-6">
        <div className="border-accent bg-muted flex h-12 w-54 animate-pulse items-center justify-center gap-6 rounded-sm border">
          <div className="bg-muted-foreground h-6 w-6 rounded-sm" />
          <div className="bg-muted-foreground h-2 w-34 rounded-sm" />
        </div>
        <div className="bg-muted flex h-12 w-54 animate-pulse items-center justify-center gap-6 rounded-sm">
          <div className="bg-muted-foreground h-6 w-6 rounded-sm" />
          <div className="space-y-2">
            <div className="bg-muted-foreground h-2 w-34 rounded-sm" />
            <div className="bg-accent/20 h-2 w-34 rounded-sm" />
          </div>
        </div>
      </div>

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
