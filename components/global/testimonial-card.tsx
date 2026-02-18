"use client";

import Image from "next/image";

type Testimonial = {
  profile: string;
  name: string;
  username: string;
  tweet: string;
  variant?: "short" | "medium" | "long";
  media?: string;
};

export default function TestimonialCard({ card }: { card: Testimonial }) {
  const { profile, name, username, tweet, variant = "medium", media } = card;

  const variantClasses =
    variant === "short"
      ? "p-3 text-sm"
      : variant === "long"
        ? "p-6 text-base"
        : "p-4 text-sm";

  return (
    <div className="p-8">
      <header className="flex gap-3">
        <div className="shrink-0">
          <Image
            src={profile}
            alt={`${name} avatar`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <div className="gap-2">
            <h4 className="text-foreground truncate text-sm font-medium">
              {name}
            </h4>
            <span className="text-accent truncate text-xs">{username}</span>
          </div>
        </div>
      </header>

      <div className="mt-2">
        <pre className="text-muted-foreground text-sm leading-6 wrap-break-word whitespace-pre-wrap">
          {tweet}
        </pre>
      </div>
    </div>
  );
}
