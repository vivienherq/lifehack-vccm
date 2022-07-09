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
    <div className="App">
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
              <span className="postText">My very first recycling project!</span>
              <img
                className="postImg"
                src="public/project images/plastic-bottle-creative-recycling-design-ideas-thumb640.jpg"
                alt=""
              />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src="public/like.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src="public/heart.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">30 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText"> comments</span>
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
              <span className="postText">My very first recycling project!</span>
              <img
                className="postImg"
                src="public/project images/plastic-bottle-creative-recycling-design-ideas-thumb640.jpg"
                alt=""
              />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src="public/like.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src="public/heart.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">30 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText"> comments</span>
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
              <span className="postText">My very first recycling project!</span>
              <img
                className="postImg"
                src="public/project images/plastic-bottle-creative-recycling-design-ideas-thumb640.jpg"
                alt=""
              />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src="public/like.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src="public/heart.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">30 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText"> comments</span>
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
              <span className="postText">My very first recycling project!</span>
              <img
                className="postImg"
                src="public/project images/plastic-bottle-creative-recycling-design-ideas-thumb640.jpg"
                alt=""
              />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src="public/like.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src="public/heart.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">30 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText"> comments</span>
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
              <span className="postText">My very first recycling project!</span>
              <img
                className="postImg"
                src="public/project images/plastic-bottle-creative-recycling-design-ideas-thumb640.jpg"
                alt=""
              />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src="public/like.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src="public/heart.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">30 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText"> comments</span>
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
              <span className="postText">My very first recycling project!</span>
              <img
                className="postImg"
                src="public/project images/plastic-bottle-creative-recycling-design-ideas-thumb640.jpg"
                alt=""
              />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src="public/like.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src="public/heart.png"
                  //onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">30 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText"> comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
