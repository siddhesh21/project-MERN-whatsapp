import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Group name</h3>
          <p>Last seen at...</p>
        </div>

        <IconButton style={{ color: "white " }}>
          <SearchOutlined />
        </IconButton>

        <IconButton style={{ color: "white " }}>
          <AttachFile />
        </IconButton>

        <IconButton style={{ color: "white " }}>
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">SiD</span>
          Hey Gorgeous
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Babe</span>
          Hii Handsome
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">SiD</span>I have planned a Date Night
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Babe</span>
          Awww.... lovely, babe... ily
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton style={{ color: "gray" }}>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input placeholder="Type a Message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <IconButton style={{ color: "gray" }}>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
