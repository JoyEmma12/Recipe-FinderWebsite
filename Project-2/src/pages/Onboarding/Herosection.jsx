import "./Herosection.css";
import herofit from "./images/herofit.jpg"
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";


const Herosection = () => {
  
  return (
    <div className="d-flex flex-lg-row flex-sm-column flex-md-column align-items-center align-items-sm-center m-auto justify-content-around carousel">
      <div className=" text-sm-center title">
        <h3>Discover Delicious Recipes for Every Occasion</h3>
        <h4>Your gateway to mouth-watering meals</h4>
        <p className="text-center">
          Explore a world of flavors with our easy-to-follow recipes.Whether you
          are a seasoned chef or just getting started,weve got something for
          everyone.
        </p>
        <Link to="/searchpage">
          <button className="getrecipe-btn">
            Get Recipes <IoSearch />
          </button>
        </Link>
      </div>
      <div className="hero-container">
        <img src={herofit} alt="image" className=" hero-image" />
      </div>
    </div>
  );
};

export default Herosection;
