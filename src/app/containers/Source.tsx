import React from "react";

import { Source } from "./components/Source/index";

interface SourceProps {
  sourceName: string;
  sourceUrl: string;
}

export default function SourceComponent({
  sourceName,
  sourceUrl,
}: SourceProps) {
  return (
    <div className="source">
      <Source.Card>
        <Source.Text source={sourceName} sourceUrl={sourceUrl} />
      </Source.Card>
    </div>
  );
}
