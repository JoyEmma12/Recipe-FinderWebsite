import aboutimage from "./images/aboutimage.jpg";
import "./Aboutpage.css";
import { IoRocketSharp } from "react-icons/io5";
import { TbBulbFilled } from "react-icons/tb";
import groupimg from "./images/groupimg.jpg";
import team1 from "./images/team1.jpg";
import team2 from "./images/team2.jpg";
import team3 from "./images/team3.jpg";

const teamList = [
  {
    id: 1,
    image: team1,
    name: "Clara Willams",
    role: "Founder & CEO",
    bio: "Clara is the driving force behind FoodRizz, combining her love for food and tech to create an innovative platform.",
  },
  {
    id: 2,
    image: team3,
    name: "Mark Thomspon",
    role: "Head of Culinary Content",
    bio: " With a background in culinary arts, Mark ensures that every recipe on FoodRizz meets the highest standards of taste and creativity.",
  },
  {
    id: 3,
    image: team2,
    name: "Sarah Lee",
    role: "UI/UX Designer",
    bio: "Sarah brings the magic of design to FoodRizz, making it easy and enjoyable for users to explore recipes and find inspiration.",
  },
];

const Aboutpage = () => {
  return (
    <div className="About-container container">
      {/* <header>About Us</header> */}
      <div className=" d-flex flex-lg-row flex-sm-column justify-content-center align-items-sm-center gap-3 about-hero">
        <div className="about-content">
          <h3>Unleashing Culinary Creativity: Discover FoodRizz</h3>
          <h4>Your Ultimate Recipe Finder and Culinary Inspiration Hub</h4>
          <p>
            At FoodRizz, we turn cooking into a fun adventure. Explore a world
            of recipes tailored to your taste, diet, and lifestyle—whether youre
            a pro in the kitchen or just starting out. Dive into new dishes,
            discover diverse cuisines, and make every meal an exciting journey!
          </p>
        </div>
        <div className="about-img">
          <img src={aboutimage} alt="aboutimg" />
        </div>
      </div>
      <section className="missionandvision">
        <div className=" text-center p-3 mt-2 missionvision-title">
          <h3 className="fs-2 fw-bold text-black">Our Mission & Vision</h3>
          <h4 className="fs-4 fw-medium text-black">
            Guided by Passion, Driven by Flavor
          </h4>
        </div>
        <div className="section-container  container">
          <div className="mission-container">
            <div className=" d-flex flex-row gap-3 m-3 icon-contain">
              <span>
                <IoRocketSharp className="mission-icon" />
              </span>
              <h4 className=" fs-3 fw-bold">Mission</h4>
            </div>
            <div className="mission-content m-3 p-2">
              <p>
                Our mission is to make cooking accessible, enjoyable, and
                personalized for everyone. We aim to empower home cooks with a
                seamless, engaging, and educational recipe discovery experience,
                transforming everyday meals into extraordinary moments.
              </p>
            </div>
          </div>
          <div className="vision-container">
            <div className=" d-flex flex-row gap-3 m-3 icon-contain">
              <span>
                <TbBulbFilled className="mission-icon" />
              </span>
              <h4 className="fs-3 fw-bold">Vision</h4>
            </div>
            <div className="vision-content m-3 p-2">
              <p>
                Our vision is to be the go-to platform for culinary enthusiasts
                around the globe, fostering a vibrant community that celebrates
                food, creativity, and shared experiences. We aspire to be more
                than just a recipe finder; we want to be your trusted culinary
                companion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team-container">
        <div className=" text-center p-3 mt-2 missionvision-title">
          <h3 className="fs-2 fw-bold text-black">
            Meet the Team behind FoodRizz
          </h3>
          <h4 className="fs-4 fw-medium text-black">
            A Passionate Group of Food Lovers, Chefs, and Tech Innovators
          </h4>
        </div>
        <div className=" d-flex flex-lg-row flex-sm-column justify-content-center align-items-center gap-3 team-subcontainer">
          <img src={groupimg} alt="team-group-img" />
          <p>
            Our team is a diverse mix of food lovers, tech enthusiasts, and
            design experts, all united by a shared passion for making cooking
            fun and accessible. From curating mouth-watering recipes to crafting
            a seamless user experience, we are committed to bringing you the
            best culinary content at your fingertips.
          </p>
        </div>
        <div className=" d-flex flex-lg-row  flex-sm-column  flex-wrap  align-items-center justify-content-center the-teams">
          {teamList.map((teamitem) => {
            const { id, image, name, role, bio } = teamitem;
            return (
              <div
                key={id}
                className=" d-flex flex-column align-items-center team-item">
                <img src={image} alt="teamotem-image" className="team-img" />
                <div className=" text-center text-white team-info">
                  <h4 className="fw-bold fs-4">{name}</h4>
                  <h5 className=" fw-semibold fs-5">{role}</h5>
                  <p className="fs-6 fw-normal">{bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
