import React, { useEffect } from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ReactShowMoreText from "react-show-more-text";
import channelIcon from "../../images/sales-channel.png";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../redux/actions/channel.action";

const VideoMetaData = ({ video, videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (video?.snippet?.channelId) {
      dispatch(getChannelDetails(video.snippet.channelId));
      dispatch(checkSubscriptionStatus(video.snippet.channelId));
    }
  }, [dispatch, video]);

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel) || {};

  // const { subscriptionStatus } = useSelector((state) => state.channelDetails);
  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  const { snippet, statistics } = video || {};
  const { channelTitle, description, title, publishedAt } = snippet || {};
  const { viewCount, likeCount, dislikeCount } = statistics || {};

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
            src={channelSnippet?.thumbnails?.default?.url || channelIcon}
            alt="Channel Icon"
            className="mr-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount || 0).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>

        <button
          className={`p-2 m-2 border-0 btn ${subscriptionStatus && "btn-gray"}`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
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
