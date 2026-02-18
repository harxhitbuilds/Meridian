"use client";

import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({
  codeString,
  language,
}: {
  codeString: string;
  language: string;
}) => {
  return (
    <div className="bg-background rounded-md py-4">
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{ background: "transparent", padding: 0, margin: 0 }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
