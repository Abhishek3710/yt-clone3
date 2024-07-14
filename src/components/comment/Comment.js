import React from "react";
import moment from "moment";
import "./_comment.scss";
import channelIcon from "../../images/sales-channel.png";
const Comment = ({ comment }) => {
  return (
    <div className="p-2 comment d-flex">
      <img src={channelIcon} alt="" className="mr-3 rounded-circle" />
      <div className="comment__body">
        <p className="mb-1 comment__header">
          Sumith Dey • {moment("2022-10-10").fromNow()}
        </p>
        <p className="mb-0">Nice Video Dude</p>
      </div>
    </div>
  );
};

export default Comment;
