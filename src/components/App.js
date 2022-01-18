import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = React.createContext();
const lOCAL_STORAGE_KEY = "cookingWithReact.recipies";

function App() {
  const [Recipes, setRecipes] = useState(sampleRecipe);

  // storing in local storage
  useEffect(() => {
    const RecipeJson = localStorage.getItem(lOCAL_STORAGE_KEY);
    if (RecipeJson != null) setRecipes(JSON.parse(RecipeJson));
  }, []);

  useEffect(() => {
    localStorage.setItem(lOCAL_STORAGE_KEY, JSON.stringify(Recipes));
  }, [Recipes]);

  const recipeConetextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "new",
      servings: 1,
      cooktime: "1:00",
      instruction: "insteruction",
      ingredients: [{ id: uuidv4(), name: "name", amount: "1tbs" }],
    };

    setRecipes([...Recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(Recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeConetextValue}>
      <RecipeList recipes={Recipes} />
      <RecipeEdit />
    </RecipeContext.Provider>
  );
}

const sampleRecipe = [
  {
    id: 1,
    name: "Plain Chicken",
    sevings: "3",
    time: "1:45",
    instructions:
      "1. Put Salt on chicken\n2. Put chicken in oven\n3. Eat Chicken",
    ingredients: [
      { id: 1, name: "chicken", amount: "2pounds" },
      { id: 2, name: "salt", amount: "1 tbs" },
    ],
  },
  {
    id: 2,
    name: "Plain pork",
    sevings: "5",
    time: "2:45",
    instructions:
      "1. Put paparika on Pork\n2. Put chicken in oven\n3. Eat Chicken",
    ingredients: [
      { id: 1, name: "pork", amount: "2pounds" },
      { id: 2, name: "paparika", amount: "4 tbs" },
    ],
  },
];

export default App;
