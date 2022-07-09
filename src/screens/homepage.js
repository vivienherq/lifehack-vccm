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
          title={"Find nearest recycling bin"}
          description={"Find your nearest recycling bin."}
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/recycling-bin-in-singapore_720x240.jpg"
        />

        <FeatureCard
          title={"Explore recycling projects"}
          description={
            "once upon a time, the game is a higly-strategic, kitty-powered version of Russian Roulette."
          }
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/children-recycling-tips-cc_1_720x240.jpg"
          routeName={"/project"}
        />

        <FeatureCard
          title={"Request stuff, offer stuff"}
          description={
            "Praying for you every day during your illness! Remember you are loved and God is on your side."
          }
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/a2c01ce7c1bccab85afdb9666cd58005e4f605bd_720x240.jpeg"
          routeName={"/requests"}
        />

        <FeatureCard
          title={"Can this be recycled..?"}
          description={
            "Remember, God gives power to the weak and strength to the powerless."
          }
          imgUrl="https://www.simpleimageresizer.com/_uploads/photos/7787f098/image_720x240.jpeg"
          routeName={"/education"}
        />

        <FeatureCard
          title={"Recycling Events"}
          description={
            "Remember, God gives power to the weak and strength to the powerless."
          }
          imgUrl="https://t3.ftcdn.net/jpg/05/06/48/38/240_F_506483830_v5irTeqx4CW7tf5ee7DRDrpTfrCgiHfd.jpg"
          routeName={"/timeline"}
        />
      </div>
    </div>
  );
}

export default Homepage;
