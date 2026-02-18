export default function SectionHeading({ heading }: { heading: string }) {
  return (
    <div className="border-border flex h-24 w-full items-center justify-center border-b">
      <h2 className="text-muted-foreground font-medium">{heading}</h2>
    </div>
  );
}
