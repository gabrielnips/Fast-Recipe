import { ReactNode } from "react";

interface SourceCardInterface {
  children: ReactNode;
}
export default function SourceCard({ children }: SourceCardInterface) {
  return (
    <>
      <div className="bg-lime-50 flex border shadow-xl border-solid py-3 px-32 min-w-auto hover:bg-lime-100 transition hover:scale-95 border-lime-200 rounded-xl">
        {children}
      </div>
    </>
  );
}
