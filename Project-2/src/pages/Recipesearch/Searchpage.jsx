import "./Searchpage.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import OtherRecipe from "./OtherRecipe";

const Searchpage = () => {
  //usersearch
  const [userSearch, setUserSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const [userCategory, setUserCategory] = useState("");

  const [categoryResult, setCategoryResult] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const [selectedMeal, setSelectedMeal] = useState("");
  const [mealResult, setMealResult] = useState([]);

  const [selectedDiet, setSelectedDiet] = useState("");
  const [dietResult, setDietResult] = useState([]);

  //loading state
  const [loading, setLoading] = useState(true);

  //categories search
  const dietary = {
    GlutenFree: "Gluten Free",
    Ketogenic: "Ketogenic",
    Vegetarian: "Vegetarian",
    LactoVegetarian: "Lacto-Vegetarian",
    Ovovegetarian: "Ovo-Vegetarian",
    Paleo: "Paleo",
    Primal: "Primal",
    Whole30: "Whole 30",
  };
  const cusineSearch = {
    African: "African",
    Asian: "Asian",
    French: "French",
    Caribbean: "Caribbean",
    British: "British",
    Indian: "Indian",
    Italian: "Italian",
    Mexican: "Mexican",
  };

  const mealType = {
    MainCourse: "Main Course",
    Bread: "Bread",
    Marinade: "Marinade",
    Sidedish: "Side Dish",
    Dessert: "Dessert",
    Appetizer: "Appetizer",
    Salad: "Salad",
    Soup: "Soup",
    Snacks: "Snacks",
    Drinks: "Drinks",
  };

  const handleCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);
    setCategoryResult([]);
    setSearchResults([]);
    setMealResult([]);
    setDietResult([]);
  };
  const handleMealTypeClick = (meals) => {
    setSelectedMeal(meals);
    setCategoryResult([]);
    setMealResult([]);
    setSearchResults([]);
    setDietResult([]);
  };
  const handleDietaryClick = (diets) => {
    setSelectedDiet(diets);
    setCategoryResult([]);
    setDietResult([]);
    setSearchResults([]);
    setMealResult([]);
  };

  const handleCategory = async (e) => {
    e.preventDefault();
    setLoading(false);
    if (selectedCuisine) {
      try {
        const apiKey = "f7132320b54648c185e459f44ee2fe56";
        const categoryurl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${selectedCuisine}`;
        const categoryResponse = await fetch(categoryurl);
        const categoryData = await categoryResponse.json();
        setCategoryResult(categoryData.results);

        sessionStorage.setItem(
          "cuisinesDisplay",
          JSON.stringify(categoryData.results)
        );
      } catch (error) {
        return <p>`Unable to fetch cuisine, ${error}`</p>;
      }
    }
    if (selectedMeal) {
      const apiKey = "f7132320b54648c185e459f44ee2fe56";
      const mealUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${selectedMeal}`;
      const mealResponse = await fetch(mealUrl);
      const mealData = await mealResponse.json();
      setMealResult(mealData.results);

      sessionStorage.setItem("mealDisplay", JSON.stringify(mealData.results));
    }

    if (selectedDiet) {
      try {
        const apiKey = "f7132320b54648c185e459f44ee2fe56";
        const dietUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${selectedDiet}`;
        const dietResponse = await fetch(dietUrl);
        const dietData = await dietResponse.json();

        sessionStorage.setItem(
          "dietDiesplay",
          JSON.stringify(dietData.results)
        );

        setDietResult(dietData.results);
      } catch (error) {
        return <p>Unable to Fetch Recipes</p>;
      }
    }
  };

  //user search handlers
  const handleUserSearch = async (e) => {
    setUserSearch(e.target.value);
    if (userSearch.length > 2) {
      setLoading(false);
      try {
        const apiKey = "f7132320b54648c185e459f44ee2fe56";
        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${userSearch}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setSearchResults(data.results);
      } catch (error) {
        console.error(`<p>Error Fetching Recipes</p>`, error);
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setUserSearch("");
  };

  //useEffect for cuisines
  useEffect(() => {
    const storeCuisine = sessionStorage.getItem("cuisinesDisplay");
    const storeDiet = sessionStorage.getItem("dietDisplay");
    const storeMeal = sessionStorage.getItem("mealDisplay");

    if (storeCuisine) {
      setCategoryResult(JSON.parse(storeCuisine));
    }
    if (storeDiet) {
      setDietResult(JSON.parse(storeDiet));
    }

    if (storeMeal) {
      setMealResult(JSON.parse(storeMeal));
    }

    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem("cuisinesDisplay");
      sessionStorage.removeItem("dietDisplay");
      sessionStorage.removeItem("mealDisplay");
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        sessionStorage.removeItem("cuisinesDisplay");
        sessionStorage.removeItem("dietDisplay");
        sessionStorage.removeItem("mealDisplay");
      });
    };
  });

  return (
    <div className="Search-container">
      <div className="text-center search-header">
        <h3 className="fw-bold fs-3">Find Your Next Culinary Adventure!</h3>
        <h5 className="fw-medium fs-5">
          Search, explore, and discover delicious recipes tailored to your
          taste. Just type and let the flavor journey begin.
        </h5>
      </div>

      <form
        className=" container d-flex flex-lg-row flex-sm-column align-items-center justify-content-center m-auto search-form"
        onSubmit={handleSearch}>
        <input
          type="search"
          value={userSearch}
          name="search"
          onChange={handleUserSearch}
          className="search-input"
          placeholder="Enter any food of your choice"
        />
        <button className="search-btn">Search</button>
      </form>

      <div className="search-filters">
        <form onSubmit={handleCategory} className="category-form">
          <h5>REFINE SEARCH BY CATEGORIES</h5>
          {/* <input
            type="search"
            name="userCategory"
            value={userCategory}
            placeholder="Enter any food to search categories"
            onChange={handleUserCategory}
          /> */}

          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Categories
            </button>
            <ul
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton1">
              <li className="dropdown-section">
                <h6 className="dropdown-item fw-bold">Cuisine Type</h6>
                <ul className="list-unstyled p-2 d-flex flex-wrap">
                  {Object.keys(cusineSearch).map((key) => {
                    return (
                      <li key={key}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleCuisineClick(cusineSearch[key])}>
                          {cusineSearch[key]}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="dropdown-section">
                <h6 className="dropdown-item fw-bold">Meal Type</h6>
                <ul className="list-unstyled p-2 d-flex flex-wrap">
                  {Object.keys(mealType).map((meal) => {
                    return (
                      <li key={meal}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleMealTypeClick(mealType[meal])}>
                          {mealType[meal]}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="dropdown-section">
                <h6 className="dropdown-item fw-bold">Special Occasions</h6>
              </li>
              <li className="dropdown-section">
                <h6 className="dropdown-item fw-bold">Dietary Restrictions</h6>
                <ul className="list-unstyled p-2 d-flex flex-wrap">
                  {Object.keys(dietary).map((diet) => {
                    return (
                      <li key={diet}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDietaryClick(dietary[diet])}>
                          {dietary[diet]}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <button className="search-btn categories-btn">Search</button>
        </form>
      </div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <div className="results-section">
          {searchResults.length > 0 && (
            <div className="container">
              <div className="recipetitle">
                <h3 className=" fw-bold fs-3 text-sm-center">Search results</h3>
              </div>
              <div className="d-flex flex-lg-row  flex-wrap align-items-center justify-content-center gap-3  recipesearch-results">
                {searchResults.map((searchitem) => {
                  return (
                    <div
                      key={searchitem.id}
                      className="d-flex flex-column align-items-center justify-content-center recipesearch-item">
                      <div>
                        <img
                          src={searchitem.image}
                          alt="searchresultimg"
                          className="w-100 rounded"
                        />
                      </div>
                      <div className="searchresult-titles text-center">
                        <h5 className="fs-5 fw-medium text-center">
                          {searchitem.title}
                        </h5>
                        <Link
                          to={`/recipe/${searchitem.id}`}
                          className="getRecipe">
                          <button className="getRecipe-btn">Get Recipe</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {categoryResult.length > 0 && (
            <div className=" container">
              <div className="recipetitle">
                <h3 className=" fw-bold fs-3 text-sm-center">
                  Cuisine Results
                </h3>
              </div>
              <div className="d-flex flex-lg-row flex-wrap align-items-center justify-content-center gap-3 cusine-results">
                {categoryResult.map((result) => {
                  return (
                    <div
                      key={result.id}
                      className="d-flex flex-column align-items-center justify-content-center recipesearch-item">
                      <div>
                        <img
                          src={result.image}
                          alt="searchresultimg"
                          className="w-100 rounded"
                        />
                      </div>
                      <div className="searchresult-titles">
                        <h5 className="fs-5 fw-medium text-center">
                          {result.title}
                        </h5>
                        <Link to={`/recipe/${result.id}`}>
                          <button className="getRecipe-btn">Get Recipe</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {mealResult.length > 0 && (
            <div className="container">
              <div className="recipetitle">
                <h3 className=" fw-bold fs-3 text-sm-center">
                  Meal type results
                </h3>
              </div>
              <div className="d-flex flex-lg-row flex-wrap align-items-center justify-content-center gap-3 cusine-results">
                {mealResult.map((type) => {
                  return (
                    <div
                      key={type.id}
                      className="d-flex flex-column align-items-center justify-content-center recipesearch-item">
                      <div>
                        <img
                          src={type.image}
                          alt="searchresultimg"
                          className="w-100 rounded"
                        />
                      </div>
                      <div className="searchresult-titles">
                        <h5 className="fs-5 fw-medium text-center">
                          {type.title}
                        </h5>
                        <Link to={`/recipe/${type.id}`}>
                          <button className="getRecipe-btn">Get Recipe</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {dietResult.length > 0 && (
            <div className="container">
              <div className="recipetitle">
                <h3 className=" fw-bold fs-3 text-sm-center">Diets Results</h3>
              </div>
              <div className="d-flex flex-lg-row flex-wrap align-items-center justify-content-center gap-3 cusine-results">
                {dietResult.map((dietype) => {
                  return (
                    <div
                      key={dietype.id}
                      className="d-flex flex-column align-items-center justify-content-center recipesearch-item">
                      <div>
                        <img
                          src={dietype.image}
                          alt="searchresultimg"
                          className="w-100 rounded"
                        />
                      </div>
                      <div className="searchresult-titles">
                        <h5 className="fs-5 fw-medium text-center">
                          {dietype.title}
                        </h5>
                        <Link to={`/recipe/${dietype.id}`}>
                          <button className="getRecipe-btn">Get Recipe</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      <OtherRecipe />
    </div>
  );
};

export default Searchpage;
