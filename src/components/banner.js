import React from "react";
import Typewriter from "typewriter-effect";
import "./banner.css";

// image: https://raw.githubusercontent.com/judygab/web-dev-projects/e17c7bbf4d4d4de447ca1211b06aec66912e695d/personal-portfolio/src/assets/img/header-img.svg

export const Banner = () => {
  return (
    <div className="containerBanner">
      <div className="banner-slogan">
        <Typewriter
          options={{
            strings: [
              "R is for Recycle",
              "U R is for YOU RECYCLE",
              "R U READY ???",
              "AYE AYE",
            ],
            autoStart: true,
            loop: true,
          }}
          //   onInit={(typewriter) => {
          //     typewriter
          //       .typeString("R is for Recycle")

          //       .pauseFor(1000)
          //       .deleteAll()
          //       .typeString("U R is for YOU RECYCLE")
          //       .pauseFor(1000)
          //       .deleteAll()
          //       .typeString("R U READY ???")
          //       .pauseFor(1000)
          //       .deleteAll()
          //       .typeString("AYE AYE")
          //       .start();
          //   }}
        />
      </div>
      <div>
        <img
          src={require("./cuterecyclingbin2.png")}
          style={{
            width: 600,
            height: 900,
          }}
        />
        {/* <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/e17c7bbf4d4d4de447ca1211b06aec66912e695d/personal-portfolio/src/assets/img/header-img.svg"></img> */}
      </div>
    </div>
  );
};
