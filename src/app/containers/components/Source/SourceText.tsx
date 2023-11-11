import React from "react";

interface SourceTextProps {
  source: string;
  sourceUrl: string;
}

export default function SourceText({ source, sourceUrl }: SourceTextProps) {
  return (
    <>
      <a className="text-lime-700 text-base font-center" href={sourceUrl}>
        Source: {source}
      </a>
    </>
  );
}
