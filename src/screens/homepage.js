import React from "react";
import "./homepage.css";
import { FaRecycle } from "react-icons/fa";
import { FeatureCard } from "../components/featureCard";
import { Banner } from "../components/banner";

////<FaRecycle size={33} color="green" />
function Homepage() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?w=360")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginBottom: "50px",
      }}
    >
      <div className="logo">
        <img className="logoImg" src={require("./cuterecyclingbin1.png")} />
        <p className="logo-text">
          RECYC
          <span>LINKS</span>
        </p>
      </div>

      <div>
        <Banner />
      </div>

      <div className="featureContainer">
        <h4 style={{ marginTop: "50px" }}> Our features </h4>

        <FeatureCard
          title={"Project Recycling"}
          description={"Explore recycling projects in this huge community!"}
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/children-recycling-tips-cc_1_720x240.jpg"
          routeName={"/project"}
        />
        <FeatureCard
          title={"Recycling Adventures"}
          description={"Look for recycling events & drives near you!"}
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/children-recycling-tips-cc_1_720x240.jpg"
          routeName={"/timeline"}
        />

        <FeatureCard
          title={"Recyclators"}
          description={
            "Request for materials/ items you want and offer to give away what you no longer need!"
          }
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/a2c01ce7c1bccab85afdb9666cd58005e4f605bd_720x240.jpeg"
          routeName={"/requests"}
        />

        <FeatureCard
          title={"Recyclinks"}
          description={"Learn more about how and what to recycle!"}
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/image_720x240.jpeg"
          routeName={"/education"}
        />

        <FeatureCard
          title={"Bins near us!"}
          description={"Find your nearest recycling bin."}
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/recycling-bin-in-singapore_720x240.jpg"
          routeName={"/map"}
        />
      </div>
    </div>
  );
}

export default Homepage;
