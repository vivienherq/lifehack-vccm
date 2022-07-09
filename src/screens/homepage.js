import React from "react";
import "./homepage.css";
import { FaRecycle } from "react-icons/fa";
import { FeatureCard } from "../components/featureCard";
import { Banner } from "../components/banner";

function Homepage() {
  return (
    <div className="container">
      <div className="logo">
        <FaRecycle size={33} color="green" />
        <p className="logo-text">
          RECYCLE
          <span>EEE</span>
        </p>
      </div>

      <div>
        <Banner />
      </div>

      <div className="featureContainer">
        <h4> Our features </h4>
        <FeatureCard
          title={"Find nearest recycling bin"}
          description={"Find your nearest recycling bin."}
          imgUrl="https://t3.ftcdn.net/jpg/05/04/58/54/240_F_504585449_mn2TyFGZwglrhOmgI1AcBjlkebjxgEQL.jpg"
        />

        <FeatureCard
          title={"Explore recycling projects"}
          description={
            "once upon a time, the game is a higly-strategic, kitty-powered version of Russian Roulette."
          }
          imgUrl="https://t4.ftcdn.net/jpg/05/06/76/77/240_F_506767715_PiMsjfdFJzVK3U9pICPeMC75dmV71Ei2.jpg"
        />

        <FeatureCard
          title={"Request stuff, offer stuff"}
          description={
            "Praying for you every day during your illness! Remember you are loved and God is on your side."
          }
          imgUrl="https://t4.ftcdn.net/jpg/05/06/06/41/240_F_506064153_KDZTxBgxPS4VX0dHuQcu89ro7fvDsegh.jpg"
        />

        <FeatureCard
          title={"Can this be recycled..?"}
          description={
            "Remember, God gives power to the weak and strength to the powerless."
          }
          imgUrl="https://t3.ftcdn.net/jpg/05/06/48/38/240_F_506483830_v5irTeqx4CW7tf5ee7DRDrpTfrCgiHfd.jpg"
        />
      </div>
    </div>
  );
}

export default Homepage;
