import "./Features.css";
import { useState, useEffect } from "react";
// import { Foodlist } from "./Foodlist";

// const apikey = "3351aeae7eef4282a984a0190f9289a1";
const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=chicken&app_id=4e1f3e5e&app_key=0a9031fb14b69a41a98b8e62a9ff6294
`;
const url2 = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=rice&app_id=4e1f3e5e&app_key=0a9031fb14b69a41a98b8e62a9ff6294
`;
const Features = () => {
  const [loadpasta, setLoadPasta] = useState([]);
  const [loadPasta2, setLoadPasta2] = useState([]);

  const fetchPasta = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setLoadPasta(data.hits);
  };

  const fetchPasta2 = async () => {
    const response = await fetch(url2);
    const data = await response.json();
    setLoadPasta2(data.hits);
  };
  useEffect(() => {
    fetchPasta();
  }, []);

  useEffect(() => {
    fetchPasta2();
  }, []);

  // fetchPasta();
  return (
    <div className="d-flex flex-column align-items-center features-container">
      <div className="text-center text-black header">
        <h4 className="fs-2 fw-bold text-black">Featured Recipes</h4>
        <h5 className="fs-4 fw-medium">Handpicked Favorites just for you</h5>
        <p className="fs-6 fw-normal">
          Discover whats cooking in our kitchen. From hearty meals to sweet
          treats, these recipes are guaranteed to satisfy.
        </p>
      </div>
      <div className=" m-auto d-flex flex-lg-row features-section">
        <div className=" d-flex flex-lg-row flex-sm-row gap-4 align-items-center justify-content-sm-center features-list">
          {loadpasta.slice(0, 2).map((pastas, index) => {
            const { label, image } = pastas.recipe;
            return (
              <div
                key={index}
                className=" shadow rounded-2 p-3 d-flex flex-column flex-sm-wrap align-items-center list-item">
                <img
                  src={image}
                  alt="recipe-image"
                  className="m-auto w-100 rounded img-fluid"
                />
                <p className="fs-5 fw-bold text-center">{label}</p>
                <button className=" m-auto fs-6 fw-bold viewrecipe-btn">
                  View Recipe
                </button>
              </div>
            );
          })}
          {loadPasta2.slice(2, 4).map((pastas2, index) => {
            const { label, image } = pastas2.recipe;
            return (
              <div
                key={index}
                className=" shadow rounded-2 p-3 d-flex flex-column align-items-center  list-item">
                <img
                  src={image}
                  alt="recipe-image"
                  className="m-auto w-100 rounded img-fluid"
                />
                <p className="fs-5 fw-bold">{label}</p>
                <button className=" m-auto fs-6 fw-bold viewrecipe-btn">
                  View Recipe
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
