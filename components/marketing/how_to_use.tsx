"use client";

import { useState } from "react";

import { howtouseconfig } from "@/config/marketing";

import CodeSnippet from "../global/code-snippet";
import Container from "../global/container";

export default function HowToUseSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedCode = howtouseconfig.rightSection?.[selectedIndex]?.code ?? "";

  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 divide-x md:grid-cols-[6fr_6fr]">
        <div className="space-y-3 p-4">
          {howtouseconfig.leftSection.map((section, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`border-border w-full cursor-pointer border p-4 text-left transition-colors ${
                selectedIndex === index ? "bg-muted" : "bg-background"
              }`}
            >
              <h3 className="text-foreground text-sm">{section.heading}</h3>
              <p
                className={`mt-1 text-sm ${selectedIndex === index ? "text-accent" : "text-muted-foreground"}`}
              >
                {section.para}
              </p>
            </div>
          ))}
        </div>

        <div>
          <div className="overflow-hidden rounded-lg shadow-sm">
            <div className="max-w-2xl font-mono text-sm text-slate-100">
              <div className="flex">
                <CodeSnippet language="javascript" codeString={selectedCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
