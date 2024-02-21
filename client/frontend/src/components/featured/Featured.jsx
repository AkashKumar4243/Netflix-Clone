import React from "react";
import "./Featured.scss";
import poster from "../../static/images/poster.png";
import thumbnail from "../../static/images/thumbnail.jpg";
import { FaPlay, FaInfo } from "react-icons/fa6";

const Featured = () => {
  return (
    <div className="feature">
      <img src={poster} alt="" />
      <div className="info">
        <img src={thumbnail} alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dolore
          maxime eaque ratione! Inventore, quis deleniti, tenetur tempora, ut
          aspernatur expedita itaque voluptas nihil veritatis in enim maxime!
          Recusandae, ducimus.
        </span>
        <div className="buttons">
          <button className="play">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <FaInfo />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
