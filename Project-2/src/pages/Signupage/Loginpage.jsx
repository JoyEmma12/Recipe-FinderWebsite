import { Link } from "react-router-dom";
import { useState } from "react";
import loginimg from "./images/loginimg.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import "./Loginpage.css"

const Loginpage = () => {
  const [userlogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setUserLogin({
      email: "",
      password: "",
    });
  };

  const userInput = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userlogin, [name]: value });
  };
  return (
    <div className=" container d-flex flex-lg-row flex-sm-column align-items-sm-center justify-content-between gap-5 signup-container">
      <div className="signup-formcontainer">
        <form className=" d-flex flex-column  gap-2" onSubmit={handleLogin}>
          <div className=" text-center text-black p-2 form-header">
            <h3>Welcome Back to Your Recipe Haven!</h3>
            <h5>
              Log in to access your saved favorites and explore new culinary
              adventures!
            </h5>
          </div>
          <div className=" d-flex flex-column email">
            <label htmlFor="email" className=" fw-medium fs-5">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={userlogin.email}
              onChange={userInput}
              placeholder="example@gmail.com"
            />
          </div>
          <div className=" d-flex flex-column password">
            <label htmlFor="password" className=" fw-medium fs-5">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={userlogin.password}
              onChange={userInput}
              placeholder="Enter your password"
            />
          </div>
          <div className="creatacct-btn">
            <button className="loginbtn">
              <Link to="/searchpage" className=" text-decoration-none login-link">Login</Link>
            </button>
          </div>
        </form>
        <div className="other-option">
          <div className=" d-flex flex-row gap-2 align-items-center justify-content-center option-text">
            <span className="line">
              <hr></hr>
            </span>
            <span>or sign up with</span>
            <span className="line">
              <hr></hr>
            </span>
          </div>
          <div className=" d-flex flex-row align-items-center justify-content-center gap-3 otherOption-btn">
            <button className=" d-flex flex-row align-items-center justify-content-center gap-2 google-btn">
              <span>
                <FcGoogle />
              </span>
              <span>Google</span>
            </button>
            <button className=" d-flex flex-row align-items-center justify-content-center gap-2 google-btn">
              <span>
                <FaGithub />
              </span>
              <span>Github</span>
            </button>
          </div>
        </div>
        <p className=" text-center p-2">
          Already have an account?
          <Link to="/login" className="link">
            <b>Sign in</b>
          </Link>
        </p>
      </div>
      <div className="signup-imgcontainer">
        <img src={loginimg} alt="signup-image" />
      </div>
    </div>
  );
};

export default Loginpage;
