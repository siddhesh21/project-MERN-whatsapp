import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/155833464_896480614525246_618209505511796620_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=ArFOR-ecKDgAX_MJoQV&_nc_ht=scontent-dub4-1.xx&oh=c03a79a934490f93de20ad4402609d27&oe=6069ACF2" />
        <div className="header__right">
          <IconButton style={{ color: "white " }}>
            <DonutLargeIcon />
          </IconButton>
          <IconButton style={{ color: "white " }}>
            <ChatIcon />
          </IconButton>
          <IconButton style={{ color: "white " }}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or Start new Chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default SideBar;
