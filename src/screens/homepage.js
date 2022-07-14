import React from "react";
import "./homepage.css";
import { FaRecycle } from "react-icons/fa";
import { FeatureCard } from "../components/featureCard";
import { Banner } from "../components/banner";

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
        <img className="logoImg" src={"./homepage/cuterecyclingbin1.png"} />
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
          imgUrl="https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?w=360"
          routeName={"/project"}
        />
        <FeatureCard
          title={"Recycling Adventures"}
          description={"Look for recycling events & drives near you!"}
          imgUrl="https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?w=360"
          routeName={"/timeline"}
        />

        <FeatureCard
          title={"Recyclators"}
          description={
            "Request for materials/ items you want and offer to give away what you no longer need!"
          }
          imgUrl="https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?w=360"
          routeName={"/requests"}
        />

        <FeatureCard
          title={"Recyclinks"}
          description={"Learn more about how and what to recycle!"}
          imgUrl="https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?w=360"
          routeName={"/education"}
        />

        <FeatureCard
          title={"Bins near us!"}
          description={"Find your nearest recycling bin."}
          imgUrl="https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?w=360"
          routeName={"/map"}
        />
      </div>
    </div>
  );
}

export default Homepage;
