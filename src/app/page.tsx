"use client";

import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import config from "./config/config";

const NavBar = dynamic(() => import("./containers/navBar"));
const RecipeDetails = dynamic(() => import("./containers/RecipeDetails"));
const Ingredients = dynamic(() => import("./containers/Ingredients"));
const Instructions = dynamic(() => import("./containers/Instructions"));
const Source = dynamic(() => import("./containers/Source"));

interface Recipe {
  title: string;
  image: string;
  summary: string;
  healthScore: number;
  readyInMinutes: number;
  servings: any;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  id: number;
  pricePerServing: number;
  extendedIngredients: {
    image: string;
    name: string;
    original: string;
  }[];
  analyzedInstructions: {
    steps: {
      step: string;
    }[];
  }[];
  sourceName: string;
  sourceUrl: string;
}

export default function Home() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const getRandomRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${config.apiKey}&includeNutrition=true`,
        { cache: "no-store" }
      );
      const data = await response.json();
      if (data.recipes && data.recipes.length > 0) {
        setRecipe(data.recipes[0]);
        console.log("Api is working");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8 px-72 justify-center">
      <NavBar getRandomRecipe={getRandomRecipe} />

      {recipe && (
        <>
          <Suspense>
            <RecipeDetails
              title={recipe.title}
              image={recipe.image}
              description={recipe.summary}
              healthScore={recipe.healthScore}
              readyInMinutes={recipe.readyInMinutes}
              servings={recipe.servings}
              vegetarian={recipe.vegetarian}
              vegan={recipe.vegan}
              glutenFree={recipe.glutenFree}
              pricePerServing={recipe.pricePerServing}
              dairyFree={recipe.dairyFree}
              foodid={recipe.id}
            />
            <Ingredients ingredients={recipe.extendedIngredients} />
            <Instructions instructions={recipe.analyzedInstructions[0].steps} />
            <Source
              sourceName={recipe.sourceName}
              sourceUrl={recipe.sourceUrl}
            />
          </Suspense>
        </>
      )}
    </main>
  );
}
