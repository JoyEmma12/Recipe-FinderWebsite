/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Categories.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image7 from "./images/image7.jpg";


const ExploreContents = [
  { id: 1, img: image1, text: "BreakFast" },
  { id: 2, img: image2, text: "Lunch" },
  { id: 3, img: image3, text: "Low Carbs" },
  { id: 4, img: image4, text: "Dessert" },
  { id: 5, img: image5, text: "Sweet Dish" },
  { id: 6, img: image7, text: "Vegan" },
];


const Categories = () => {

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} explore-prev`} onClick={onClick}>
        <FaChevronLeft className="left" />
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} explore-next`} onClick={onClick}>
        <FaChevronRight className="right" />
      </div>
    );
  };

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="explore-container">
      <div className=" text-center text-black header">
        <h4 className="fw-bold fs-2 text-black">Explore by Categories</h4>
        <p className="fw-medium fs-6">
          Not sure what to cook? Browse through our categories to find the
          perfect dish for any occasion.
        </p>
      </div>
      <div className="explore-lists">
        <div className="item-container">
          <Slider {...settings}>
            {
              ExploreContents.map((item) => {
              return (
                <div key={item.id} className="explore-item shadow">
                  <img src={item.img} className=" w-100"  />
                  <div className="explore-title">{item.text}</div>
                </div>
              );
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
