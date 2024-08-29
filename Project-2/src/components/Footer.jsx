import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" d-flex flex-column align-items-center footer-container">
      <div className=" d-flex flex-lg-row align-items-center justify-content-between gap-5 footer-subcontainer">
        <div className="logo-info">
          <header>FoodRizz</header>
          <h3>Your Perfect Guide to Delicious Meal Prep</h3>
          <small className="fw-medium fs-6 text-white">FoodRizz 2024</small>
        </div>
        <div className=" d-flex flex-lg-row align-items-center gap-5 p-2 logo-navlinks">
          <ul>
            <li>
              <h5 className=" text-white fw-bold">Company</h5>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Contact Us
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <h5 className=" text-white fw-bold">Resources</h5>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Papers
              </a>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Press Conference
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <h5 className=" text-white fw-bold">Legal</h5>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className=" text-white fw-medium">
                Data Processing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-white"></hr>
      <div className=" d-flex flex-row justify-content-between footer-subcontainer subcontainer">
        <span className=" text-white fw-normal">2024 FoodRizz Inc. All rights reserved. </span>
        <div className=" d-flex flex-row gap-2 mt-2 social-icons">
          <span className="icon-container">
            <FaFacebookF className="icon" />
          </span>
          <span className="icon-container">
            <FaTwitter className="icon" />
          </span>
          <span className="icon-container">
            <AiFillInstagram className="icon" />
          </span>
          <span className="icon-container">
            <FaGithub className="icon" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;