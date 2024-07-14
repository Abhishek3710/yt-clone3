import React from "react";
import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";

import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import channelIcon from "../../images/sales-channel.png";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="py-2 m-1 videoHorizontal align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src={channelIcon}
          effect="blur"
          className={`videoHorizontal__thumbnail`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={6} className="p-0 videoHorizontal__right">
        <p className="mb-1 videoHorizontal__title">
          Be a Fullstach developer in 1 month
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(10000).format("0.a")} Views •
          {moment("2022-10-10").fromNow()}
        </div>

        <div className="my-1 videoHorizontal__channel d-flex align-items-center">
          <p className="mb-0">Backbench Coder</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
