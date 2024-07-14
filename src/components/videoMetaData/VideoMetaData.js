import React from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";

import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ReactShowMoreText from "react-show-more-text"; // Fix import: remove { }
import channelIcon from "../../images/sales-channel.png";

const VideoMetaData = ({ title, description }) => {
  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {numeral(10000).format("0.a")} Views •{" "}
            {moment("2023-05-17").fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(100000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(2000).format("0.a")}
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
            <span>Backbench Coder</span>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          doloremque. Qui a vero unde dolorum totam cupiditate suscipit corporis
          dolor officiis! Rem, veniam inventore! Provident maiores, pariatur
          minima cupiditate dolores amet alias repudiandae accusamus maxime
          repellat, molestiae nostrum ratione dolor laboriosam facilis quisquam
          incidunt. Reprehenderit exercitationem suscipit vero aperiam quaerat
          ullam. Magnam, totam, sequi quo placeat veniam, dolores adipisci
          eveniet quidem labore quae modi consectetur possimus eum. Repellat
          aliquid error odit explicabo doloremque magni assumenda qui
          accusantium ad architecto! Enim sit alias architecto consectetur
          blanditiis exercitationem itaque earum aspernatur! Doloribus unde
          similique quidem facilis qui, vero labore atque corrupti perferendis
          neque reprehenderit dolorem maiores perspiciatis? Aliquid excepturi
          quia neque vel architecto amet eaque non nostrum dolorum animi aut
          nesciunt ab quas qui dolor doloremque exercitationem, expedita nisi
          vitae necessitatibus! Possimus deserunt fugiat maiores eligendi
          consectetur, mollitia, consequatur, iste nesciunt reprehenderit
          repellendus molestiae distinctio repudiandae praesentium natus in.
          Vero, voluptatibus officia?
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
