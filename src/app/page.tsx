import React from "react";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./containers/navBar"));
const RecipeDetails = dynamic(() => import("./containers/RecipeDetails"));
const Ingredients = dynamic(() => import("./containers/Ingredients"));
const Instructions = dynamic(() => import("./containers/Instructions"));
const Source = dynamic(() => import("./containers/Source"));

export default function Home() {
  const getSavedRecipe = () => {
    try {
      const savedRecipeString = localStorage.getItem("recentRecipe");
      if (savedRecipeString === null) {
        return null;
      }
      const savedRecipe = JSON.parse(savedRecipeString);

      return savedRecipe;
    } catch (error) {
      console.error("Error retrieving saved recipe:", error);
      return null;
    }
  };

  const recipe = getSavedRecipe();

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8 px-72 justify-center">
      <NavBar />

      {recipe && (
        <>
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
          <Source sourceName={recipe.sourceName} sourceUrl={recipe.sourceUrl} />
        </>
      )}
    </main>
  );
}
