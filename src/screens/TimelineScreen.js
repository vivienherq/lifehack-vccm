import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaUserCircle } from "react-icons/fa";

import "../components/for-timeline/Boxes.css";
import "../components/upperbar.js";
import Upperbar from "../components/upperbar.js";

const TimelineScreen = () => {
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
      <h1>Recycling Events</h1>
      <div className="grids">
        <div data-aos="fade-left" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <span className="postUsername">
                  LET’S RECYCLE TOGETHER CAMPAIGN @ Tampines!
                </span>
                <span className="postDate">20 July</span>
              </div>
            </div>
            <div className="postCenter">
              <img className="postImg" src={require("./recyclingstock1.jpg")} />
              <div className="postTopRight">
                Let’s Recycle Together is a new campaign by Zero Waste SG. We
                aim to encourage more HDB residents to recycle using the
                existing blue recycling bins in their estates, and to educate
                them on recycling correctly. This ground-up campaign complements
                the National Recycling Programme by the National Environment
                Agency (NEA), where the Public Waste Collectors licensed by NEA
                are required to provide the blue recycling bins and recycling
                collection for all HDB estates and landed properties in
                Singapore. Your neighbours and other families are recycling,
                join them today and let’s recycle together!
              </div>
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
                <span className="postCommentText"> comments</span>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <span className="postUsername">
                  RECYCLING ART BY STUDENT FROM YALE-NUS COLLEGE
                </span>
                <span className="postDate">25 July</span>
              </div>
            </div>
            <div className="postCenter">
              <img className="postImg" src={require("./recyclingstock1.jpg")} />
              <div className="postTopRight">
                There’s always a better use of resources. Think twice before
                throwing anything!
              </div>
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
                <span className="postCommentText"> comments</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <span className="postUsername">
                  'Green Wardrobe' by NUS environment group
                </span>
                <span className="postDate">30 July</span>
              </div>
            </div>
            <div className="postCenter">
              <img className="postImg" src={require("./recyclingstock1.jpg")} />
              <div className="postTopRight">
                A 'green wardrobe' initiative led by a group of National
                University of Singapore (NUS) students was launched on Monday,
                in a bid to spur the recycling of clothes. NUS Students Against
                Violation of the Earth (Save) aims to collect 1,500kg worth of
                clothes - shoes, undergarments, accessories and pillows are
                banned due to hygiene concerns - by May 2014. The two wardrobes
                will be based on campus, as well as be roving to community
                events in the South West District.
              </div>
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
                <span className="postCommentText"> comments</span>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <span className="postUsername">
                  RECYCLING PROJECT WITH K2 STUDENTS @ NEWTON KINDERGARTEN
                </span>
                <span className="postDate">1 August</span>
              </div>
            </div>
            <div className="postCenter">
              <img className="postImg" src={require("./recyclingstock1.jpg")} />
              <div className="postTopRight">
                This ground-up campaign complements the National Recycling
                Programme by the National Environment Agency (NEA), where the
                Public Waste Collectors licensed by NEA are required to provide
                the blue recycling bins and recycling collection for all HDB
                estates and landed properties in Singapore. Your neighbours and
                other families are recycling, join them today and let’s recycle
                together!
              </div>
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
                <span className="postCommentText"> comments</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-right" className="boxes">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <span className="postUsername">
                  TEXTILE DRIVE @ NUS KENT RIDGE HALL
                </span>
                <span className="postDate">2 August</span>
              </div>
            </div>
            <div className="postCenter">
              <img className="postImg" src={require("./recyclingstock1.jpg")} />
              <div className="postTopRight">
                Our young green warriors actively organizing recycling
                events...👍 This marks the start of a week of activities
                promoting climate change, including the two-day "Shop @ S.A.V.E"
                at NUS' Central Forum, which features sustainable products, and
                a Plastic Waste Symposium on Saturday, where a panel of experts
                will convene to discuss the hazards of plastic waste.
              </div>
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
                <span className="postCommentText"> comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineScreen;

//https://www.greensquare.com.sg/events-schools
