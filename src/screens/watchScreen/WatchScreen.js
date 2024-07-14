import React from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import Comments from "../../components/comments/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            style={{ border: "none" }}
            title="My Video"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </Col>
      <Col>
        {[...Array(20)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
