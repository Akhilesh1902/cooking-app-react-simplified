import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="cookTime">Cook time</label>
        <input type="text" name="cookTime" id="cookTime" />
        <label htmlFor="servings">Servings</label>
        <input type="text" name="servings" id="servings" />
        <label htmlFor="instructions">Instructions</label>
        <textarea cols="30" rows="10" name="instructions"></textarea>
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <label>Name</label>
        <label>Amount</label>
        <div></div>
        {/*ingredient component */}
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  );
}
