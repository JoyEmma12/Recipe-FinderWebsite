import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import signupimage from "./images/signupimage.jpg";

const Signup = () => {
  const [person, setPerson] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleAcct = (e) => {
    e.preventDefault();
    setPerson({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const handlePerson = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };
  return (
    <div className=" container d-flex flex-lg-row flex-sm-column align-items-sm-center justify-content-between gap-5 signup-container">
      <div className="signup-imgcontainer">
        <img src={signupimage} alt="signup-image" />
      </div>
      <div className="signup-formcontainer">
        <form className=" d-flex flex-column align-items-sm-center  gap-2" onSubmit={handleAcct}>
          <div className=" text-center text-black p-2 form-header">
            <h3>Join FoodRizz and Start Cooking Up Magic!</h3>
            <h5>
              Create your account and unlock thousands of mouth-watering recipes
              in just a few clicks!
            </h5>
          </div>
          <div className=" d-flex flex-column gap-2 name">
            <label htmlFor="name" className=" fw-medium fs-5">
              Name:
            </label>
            <input
              type="text"
              name="username"
              value={person.username}
              onChange={handlePerson}
              placeholder="Enter your name"
            />
          </div>
          <div className=" d-flex flex-column email">
            <label htmlFor="email" className=" fw-medium fs-5">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={person.email}
              onChange={handlePerson}
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
              value={person.password}
              onChange={handlePerson}
              placeholder="Enter a strong password"
            />
          </div>
          <div className=" d-flex flex-column confirmpassword">
            <label htmlFor="confirmpassword" className=" fw-medium fs-5">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmpassword"
              value={person.confirmpassword}
              placeholder="Enter your password again"
              onChange={handlePerson}
            />
          </div>
          <div className="creatacct-btn">
            <button className="signup-btn">Create Account</button>
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
    </div>
  ); 
};

export default Signup;
