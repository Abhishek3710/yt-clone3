import React from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";

import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ReactShowMoreText from "react-show-more-text"; // Fix import: remove { }
import channelIcon from "../../images/sales-channel.png";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {numeral(viewCount).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src={channelIcon}
            alt="Channel Icon"
            className="mr-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{numeral(10000).format("0.a")} Subscribers</span>
          </div>
        </div>

        <button className="p-2 m-2 border-0 btn">Subscribe</button>
      </div>

      <div className="videoMetaData__description">
        <ReactShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
