import React, { useEffect, useState } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [duration, setDuration] = useState(null);
  const [views, setViews] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const {
          data: { items },
        } = await request("videos", {
          params: {
            part: "contentDetails,statistics",
            id: _videoId,
          },
        });
        if (items && items.length > 0) {
          setDuration(items[0].contentDetails.duration);
          setViews(items[0].statistics.viewCount);
        } else {
          console.error("No video details found for ID:", _videoId);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    if (_videoId) {
      get_video_details();
    } else {
      console.error("Invalid video ID:", _videoId);
    }
  }, [_videoId]);

  useEffect(() => {
    const get_channel_icon = async () => {
      try {
        const {
          data: { items },
        } = await request("/channels", {
          params: {
            part: "snippet",
            id: channelId,
          },
        });
        if (items && items.length > 0) {
          setChannelIcon(items[0].snippet.thumbnails.default);
        } else {
          console.error("No channel details found for ID:", channelId);
        }
      } catch (error) {
        console.error("Error fetching channel icon:", error);
      }
    };

    if (channelId) {
      get_channel_icon();
    } else {
      console.error("Invalid channel ID:", channelId);
    }
  }, [channelId]);

  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${_videoId}`);
  };

  return (
    <div className="video" onClick={handleVideoClick}>
      <div className="video__top">
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video__top__duration">{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye />
          {numeral(views).format("0.a")} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <LazyLoadImage src={channelIcon?.url} effect="blur" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
