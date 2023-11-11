import React from "react";
import Image from "next/image";

interface IngredientImageProps {
  imageURL: string;
  name: string;
}

export default function IngredientImage({
  imageURL,
  name,
}: IngredientImageProps) {
  return (
    <>
      <Image
        width={50}
        height={50}
        loading="lazy"
        src={`https://spoonacular.com/cdn/ingredients_100x100/${imageURL}`}
        alt={name}
      />
    </>
  );
}
