import React from "react";
import Image from "next/image";

interface Ingredient {
  image: string;
  name: string;
  original: string;
}

interface IngredientsProps {
  ingredients: Ingredient[];
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <div className="ingredients">
      <div className="bg-lime-50 shadow-xl flex gap-5 flex-col border border-solid py-8 px-8 border-lime-200 rounded-xl">
        <a className="text-lime-700 text-start text-xl font-normal">
          Ingredients:
        </a>
        <div className="grid grid-cols-4 gap-3">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="border-lime-500 border border-solid transition hover:scale-95 bg-white rounded-xl px-5 py-2 items-center flex gap-2 justify-between"
            >
              <Image
                width={50}
                height={50}
                loading="lazy"
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                alt={ingredient.name}
              />
              <a className="text-lime-700 text-center text-base">
                {ingredient.original}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
