import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import request from "../../api";

const VideoHorizontal = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const navigate = useNavigate();
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const {
          data: { items },
        } = await request("/videos", {
          params: {
            part: "contentDetails,statistics",
            id: id.videoId,
          },
        });
        if (items && items.length > 0) {
          setDuration(items[0].contentDetails.duration);
          setViews(items[0].statistics.viewCount);
        } else {
          console.error("No video details found for ID:", id.videoId);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    if (id && id.videoId) {
      get_video_details();
    } else {
      console.error("Invalid video ID:", id);
    }
  }, [id]);

  const handleClick = () => {
    navigate(`/watch/${id.videoId}`);
  };

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={6} className="p-0 videoHorizontal__right">
        <p className="mb-1 videoHorizontal__title">{title}</p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
          {moment(publishedAt).fromNow()}
        </div>

        <div className="my-1 videoHorizontal__channel d-flex align-items-center">
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
