import { ReactNode } from "react";

interface IngredientRootProps {
  index: number;
  children: ReactNode;
}

export default function ingredientRoot({
  children,
  index,
}: IngredientRootProps) {
  return (
    <>
      <div
        key={index}
        className="border-lime-500 border border-solid transition hover:scale-95 bg-white rounded-xl px-5 py-2 items-center flex gap-2 justify-between"
      >
        {children}
      </div>
    </>
  );
}
