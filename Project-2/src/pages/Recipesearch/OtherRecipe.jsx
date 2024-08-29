import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./OtherRecipe.css";

const OtherRecipe = () => {
  const [recommedation, setRecommendation] = useState([]);

  const handleRecommendation = async () => {
    try {
      const apiKey = "f7132320b54648c185e459f44ee2fe56";
      const url = `https://api.spoonacular.com/recipes/random?number=6&apiKey=${apiKey}&include-tags=diets,dessert,vegetarian`;
      const response = await fetch(url);
      const data = await response.json();
      setRecommendation(data.recipes);

      sessionStorage.setItem("recommendations", JSON.stringify(data.recipes));
      // localStorage.setItem("lastrecommendations", JSON.stringify(data.recipes));
      console.log(data.recipes);
    } catch (error) {
      return <p>Unable to fetch recommended Recipes</p>;
    }
  };
  useEffect(() => {
    const storeRecommendation = sessionStorage.getItem("recommendations");

    if (storeRecommendation) {
      setRecommendation(JSON.parse(storeRecommendation));
      // localStorage.removeItem("lastrecommendations");
    } else {
      handleRecommendation();
    }

    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem("recommendations");
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        sessionStorage.removeItem("recommendations");
      });
    };
  }, []);

  return (
    <div className="otherRecipe-container container">
      <div className=" recipetitle">
        <h3 className=" fw-bold fs-3">Chefs Choice Curated Recipe Just for You</h3>
      </div>
      <div className=" d-flex flex-lg-row flex-wrap align-items-center justify-content-center gap-3 recipe-grids">
        {recommedation.map((items) => {
          return (
            <div
              key={items.id}
              className="d-flex flex-column align-items-center justify-content-center recipesearch-item">
              <div>
                <img
                  src={items.image}
                  alt="searchresultimg"
                  className="w-100 rounded"
                />
              </div>
              <div className="searchresult-titles">
                <h5 className="fs-5 fw-medium text-center">{items.title}</h5>
                <Link to={`/recipe/${items.id}`}>
                  <button className="getRecipe-btn">Get Recipe</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherRecipe;
