import React, { useState, useEffect, useRef } from "react";
import { io as ClientIO } from "socket.io-client";

interface IChatMessage {
  userName: string;
  message: string;
}

let socket;
const Chat: React.FC = () => {
  useEffect((): any => {
    const socket = ClientIO(process.env.NEXT_PUBLIC_SITE_URL, { path: "/api/socket/io" });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
    });

    if (socket) return () => socket.disconnect();
  }, []);

  return (
    <>
      <h1>Chat</h1>
    </>
  );
};

export default Chat;
