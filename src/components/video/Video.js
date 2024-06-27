import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://img.youtube.com/vi/13gLB6hDHR8/maxresdefault.jpg"
          alt="NA"
        />
        <span>10:55</span>
      </div>
      <div className="video__title">
        Advanced JavaScript Tutorial in Hindi 2020
      </div>
      <div className="video__details">
        <span>
          <AiFillEye />
          5m Views •
        </span>
        <span>5 Days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AIdro_kNaumymcxYzV7_n7_VRbQ2TRlIbU2w5csOMN0cH8jiED8=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>CodeWithHarry</p>
      </div>
    </div>
  );
};

export default Video;
