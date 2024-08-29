// import  from "react";
import "./RecipeDetailsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetailsPage = () => {
  const [recipeDetails, setRecipeDetails] = useState("");
  const [ingredientDetails, setIngredientsDetails] = useState([]);
  const [stepsDetails, setStepsDetails] = useState([]); // Initialize as an array

  const { id } = useParams();

  useEffect(() => {
    const handleRecipeInfo = async () => {
      try {
        const apiKey = "f7132320b54648c185e459f44ee2fe56";
        const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`;
        const url2 = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?&apiKey=${apiKey}`;
        const url3 = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`;

        const response = await fetch(url);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);

        const datas = await response.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        setRecipeDetails(datas);
        setIngredientsDetails(data2.ingredients);

        // Check if data3 contains at least one element and if it has steps
        if (data3.length > 0 && data3[0].steps) {
          setStepsDetails(data3[0].steps);
        } else {
          setStepsDetails([]); // Set empty array if no steps are found
        }
      } catch (error) {
        console.error("Error Fetching Recipe Details", error);
      }
    };

    handleRecipeInfo();
  }, [id]);

  return (
    <div className="recipe-details-container">
      <div className="recipe-details-subcontainer">
        <div className=" d-flex flex-column align-items-center gap-2 recipeintro-container">
          <h1 className="fw-bold fs-1">{recipeDetails.title}</h1>
          <img
            src={recipeDetails.image}
            alt={recipeDetails.title}
            className=" rounded-5"
          />
          <div className=" d-flex flex-row justify-content-between cooking-servings">
            <span className="fs-5 fw-medium">
              Servings: {recipeDetails.servings}
            </span>
            <span className="fs-5 fw-medium">
              Cooking Minutes: {recipeDetails.readyInMinutes}
            </span>
          </div>
          <div className=" fs-5 fw-medium diets">
            Diets:
            {recipeDetails.diets && recipeDetails.diets.length > 0 ? (
              <span className="fs-5"> {recipeDetails.diets.join(" , ")}</span>
            ) : (
              <p className="fs-5">No diets for this recipe</p>
            )}
          </div>
        </div>
      </div>
      <div className=" m-2 recipe-ingredients">
        <h3 className=" fs-bold fs-3">Ingredients:</h3>
        {ingredientDetails.map((ingredient, index) => (
          <div key={index}>
            <ul className="ingredient-list">
              <li>{ingredient.name}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className=" m-2 Instructions">
        <h3 className=" fs-bold fs-3">Instructions:</h3>
        {stepsDetails.length > 0 ? (
          stepsDetails.map((item, index) => (
            <div key={index}>
              <ul className="instruction-list">
                <li>{item.step}</li>
              </ul>
            </div>
          ))
        ) : (
          <p>No instructions available for this recipe.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
