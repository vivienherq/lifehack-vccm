import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaUserCircle } from "react-icons/fa";

import "../components/for-feed/Boxes.css";
import "../components/upperbar.js";
import Upperbar from "../components/upperbar.js";

const ProjectScreen = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  /*
  const Card = ({ id }) => {
    return (

    )
  };*/

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?w=360")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginBottom: "50px",
      }}
    >
      <Upperbar />
      <h1>Recycling Projects</h1>
      <div className="grids">
        <div data-aos="fade-left" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <FaUserCircle size="5rem" />
                <span className="postUsername">Amy T.</span>
                <span className="postDate">9 July</span>
              </div>
              <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
              <img
                className="postImg"
                src={require("./plastic-bottle-creative-recycling-design-ideas-thumb640.jpg")}
              />
              <span className="postText">
                {" "}
                A lamp made with plastic bottle pieces I collected around my
                neighbourhood! Planning on making anyone and am open to
                suggestions on where I may collect plastic bottles! another one!
              </span>
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src={require("./like.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src={require("./heart.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">30 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">6 comments</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <FaUserCircle size="5rem" />
                <span className="postUsername">Steve F.</span>
                <span className="postDate">9 July</span>
              </div>
              <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
              <img
                className="postImg"
                src={require("./house-light-designrulz-2.webp")}
              />
              <span className="postText">
                My very first recycling project for my son's new room! Made with
                olds books collected from this application and of course, withe
                the previous owner's permission!
              </span>
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src={require("./like.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src={require("./heart.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">26 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">3 comments</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <FaUserCircle size="5rem" />
                <span className="postUsername">Sean D.</span>
                <span className="postDate">9 July</span>
              </div>
              <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
              <img
                className="postImg"
                src={require("./CLOCK-DESIGNRULZ-00643.webp")}
              />
              <span className="postText">
                *REQUEST: Collecting magazines in the East area!* A clock DIY
                for my newly renovated living room!
              </span>
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src={require("./like.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src={require("./heart.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">290 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <FaUserCircle size="5rem" />
                <span className="postUsername">Andrew P.</span>
                <span className="postDate">9 July</span>
              </div>
              <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
              <img className="postImg" src={require("./3.jpg")} />
              <span className="postText">
                Love wine in the family and have been collecting the corks for a
                while! Figured to make something out of all of them. What do you
                think!
              </span>
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src={require("./like.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src={require("./heart.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">24 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">8 comments</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <FaUserCircle size="5rem" />
                <span className="postUsername">Sean Meng</span>
                <span className="postDate">9 July</span>
              </div>
              <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
              <img
                className="postImg"
                src={require("./159768ea2230fa2119d7acf2fe15108d.jpg")}
              />
              <span className="postText">
                A quick DIY! Head over to my instagram @aa2211 for the tutorial
                on how to make this quick and simply recycling project! Would
                love to hear from you on similar projects!
              </span>
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src={require("./like.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src={require("./heart.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">40 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">12 comments</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-right" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <FaUserCircle size="5rem" />
                <span className="postUsername">Cement Foo</span>
                <span className="postDate">9 July</span>
              </div>
              <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
              <img
                className="postImg"
                src={require("./junk-necklace-1_600x.jpgv1573382513.jpg")}
              />
              <span className="postText">
                {" "}
                An easy DIY to keep the kids busy!
              </span>
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src={require("./like.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src={require("./heart.png")}
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">30 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">10 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
