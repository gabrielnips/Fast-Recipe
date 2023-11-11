import React from "react";

interface SourceProps {
  source: string;
  sourceUrl: string;
}

const Source: React.FC<SourceProps> = ({ source, sourceUrl }) => {
  return (
    <div className="source">
      <div className="bg-lime-50 flex border shadow-xl border-solid py-3 px-32 min-w-auto hover:bg-lime-100 transition hover:scale-95 border-lime-200 rounded-xl">
        <a className="text-lime-700 text-base font-center" href={sourceUrl}>
          Source: {source}
        </a>
      </div>
    </div>
  );
};

export default Source;
