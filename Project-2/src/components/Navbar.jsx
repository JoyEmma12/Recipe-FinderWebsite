import "../App.css";
import "../components/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelector(".nav-links");
    const ham = document.querySelector(".ham");
    const closebtn = document.querySelector(".closebtn");
    ham.addEventListener("click", () => {
      navLinks.classList.add("topnav");
      closebtn.classList.add("closenav");
      ham.style.display = "none";
    });
    closebtn.addEventListener("click", () => {
      navLinks.classList.remove("topnav");
      ham.style.display = "block";
      closebtn.classList.remove("closenav");
    });
  }, []);

  return (
    <div className=" d-flex flex-lg-row flex-sm-column flex-md-row justify-content-lg-between nav-container">
      <div className="logo">
        <header>
          <Link to="/" className=" text-decoration-none logo-link">
            FoodRizz
          </Link>
        </header>
      </div>
      <div className="nav-linkscontainer">
        <ul className="  d-flex flex-lg-row justify-content-lg-around gap-4 nav-links">
          <li className=" dropdown categories-dropdown">
            <a
              href="#"
              className=" dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Categories
            </a>
            <ul className=" dropdown-menu categories-menu">
              <li>
                <a className=" dropdown-item" href="#">
                  Cusine Type
                </a>
              </li>
              <li>
                <a className=" dropdown-item" href="#">
                  Meal Type
                </a>
              </li>
              <li>
                <a className=" dropdown-item" href="#">
                  Special Occasions
                </a>
              </li>
              <li>
                <a className=" dropdown-item" href="#">
                  Dietary Restrictions
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/aboutpage">
              <a href="#">About Us</a>
            </Link>
          </li>
          <li>
            <Link to="/contactpage">
              <a href="#">Contact Us</a>
            </Link>
          </li>
          <li>
            <button className="getstarted-btn">
              <Link
                to="/signup"
                className=" text-decoration-none getstarted-link">
                Get Started
              </Link>
            </button>
          </li>
          <li>
            <button className="login-btn">
              <Link to="/login">Login</Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="ham" role="button">
        <FaBars className=" fs-4" />
      </div>
      <div className="closebtn" role="button">
        <IoCloseSharp className="fs-4" />
      </div>
    </div>
  );
};

export default Navbar;
