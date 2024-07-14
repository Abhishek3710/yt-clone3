import React from "react";
import "./_comments.scss";
import channelIcon from "../../images/sales-channel.png";
import Comment from "../comment/Comment";

const Comments = () => {
  const handleComment = () => [
    //logic
  ];

  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="my-2 comments__form d-flex w-100">
        <img src={channelIcon} alt="avatar" className="mr-3 rounded-circle" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            //value={text}
            //onChange={e => setText(e.target.value)}
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(20)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
