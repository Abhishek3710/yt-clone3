import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { MdApps } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />
      <form action="">
        <input type="text" placeholder="Search" />
        <button>
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="https://images.app.goo.gl/SX8LBZVWukqKbBQs9" alt="Avatar" />
      </div>
    </div>
  );
};

export default Header;
