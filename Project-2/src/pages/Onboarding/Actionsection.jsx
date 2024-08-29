import "./Actionsection.css";
import kitchenimage3 from "./images/kitchenimage3.png";
import { Link } from "react-router-dom";

const Actionsection = () => {
  return (
    <div className="action-container">
      <div className=" text-center action-header">
        <h3 className="fs-2 fw-bold">Join our Cooking Community!</h3>
        <p className="fs-6 fw-medium">
          Save your favorite recipes, share your creations, and get personalized
          recommendations.
        </p>
      </div>
      <div className="d-flex flex-lg-row flex-sm-column align-items-center justify-content-between gap-5 action-content">
        <div className="d-flex flex-lg-row flex-sm-column align-items-center justify-content-between gap-5 actionimg-container">
          <img src={kitchenimage3} className="action-img" alt="actionimg" />

          <div className="action-subcontent">
            <p>
              Dont miss out on the latest recipes and cooking tips. Join our
              community and start your culinary journey today!
            </p>
            <div className="btns">
              <Link to="/signup">
                <button className=" shadow signup-btn">Signup</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionsection;
