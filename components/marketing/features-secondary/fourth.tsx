import { IconLayersIntersect } from "@tabler/icons-react";

export default function FourthCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div className="bg-muted min-h-44 w-full rounded-t-xl mask-b-from-6"></div>

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
