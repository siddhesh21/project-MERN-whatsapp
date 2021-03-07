import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React, { useState } from "react";
import "./Chat.css";
import axios from "./axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    axios.post("/messages/new", {
      message: input,
      name: "SiD",
      timestamp: "Just now!",
      received: true,
    });

    setInput("");
  };

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
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__reciever"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <IconButton style={{ color: "gray" }}>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a Message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <IconButton style={{ color: "gray" }}>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
