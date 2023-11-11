import React from "react";

interface IngredientNameProps {
  name: string;
}

export default function IngredientName({ name }: IngredientNameProps) {
  return (
    <>
      <a className="text-lime-700 text-center text-base">{name}</a>
    </>
  );
}
