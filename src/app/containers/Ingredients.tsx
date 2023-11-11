import React from "react";
import { ingredientC } from "./components/Ingredient/index";

interface Ingredient {
  image: string;
  name: string;
  original: string;
}

interface IngredientsProps {
  ingredients: Ingredient[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <div className="ingredients">
      <div className="bg-lime-50 shadow-xl flex gap-5 flex-col border border-solid py-8 px-8 border-lime-200 rounded-xl">
        <a className="text-lime-700 text-start text-xl font-normal">
          Ingredients:
        </a>
        <div className="grid grid-cols-4 gap-3">
          {ingredients.map((ingredient, index) => (
            <>
              <ingredientC.Root index={index}>
                <ingredientC.Image
                  imageURL={ingredient.image}
                  name={ingredient.name}
                />
                <ingredientC.Name name={ingredient.original} />
              </ingredientC.Root>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
