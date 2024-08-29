// import React from 'react'
import "./Testimonials.css";
import Testimonial1 from "./images/testimonial1.jpg";
import Testimonial2 from "./images/testimonial2.jpg";
import Testimonial3 from "./images/testimonial3.jpg";

const UserReviews = [
  {
    id: 1,
    image: Testimonial1,
    reviews:
      "FoodRizz helped me get out of my cooking rut. The recipes are creative and cater to all skill levels. It’s like having a personal chef guide you through every dish!",
    name: "Lisa Green",
  },
  {
    id: 2,
    image: Testimonial2,
    reviews:
      "I'm not the best cook, but FoodRizz made everything simple and stress-free. The step-by-step instructions are clear, and the results are always delicious. Definitely my go-to app for dinner ideas!",
    name: "John Miller",
  },
  {
    id: 3,
    image: Testimonial3,
    reviews:
      "I love how I can find recipes for any occasion on FoodRizz. Whether it’s a quick weeknight dinner or an impressive meal for guests, this app has it all. Highly recommended!",
    name: "Sarah Johnson",
  },
];

const Testimonials = () => {
  return (
    <div className="Testimonial-container">
      <div className=" text-center text-black testi-header">
        <h3 className="fs-2 fw-bold">What Our Users Say</h3>
        <p className="fs-6 fw-medium">
          See why thousands of home chefs trust us to bring delicious recipes to
          their tables.
        </p>
      </div>
      <div className=" d-flex flex-lg-row  flex-lg-wrap flex-sm-wrap flex-md-wrap align-items-center justify-content-center testi-list">
        {UserReviews.map((item) => {
          return (
            <div key={item.id} className="d-flex flex-column align-items-center testi-item">
              <div className="testimg-container">
                <img src={item.image} alt="testi-img" className="testi-img" />
              </div>
              <div className=" text-center reviews">
                <p className=" text-wrap">{item.reviews}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Testimonials;
