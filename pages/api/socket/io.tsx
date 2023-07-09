// import { Server } from "socket.io";
// import cors from "cors";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default function SocketHandler(req, res) {
//   if (!res.socket.server.io) {
//     const io = new Server(res.socket.server, {
//       path: "/api/socket_io",
//       addTrailingSlash: false,
//     });

//     res.socket.server.io = io;

//     io.on("connection", (socket) => {
//       const clientId = socket.id;
//       console.log("A client connected");
//       console.log(`A client connected. ID: ${clientId}`);
//       io.emit("client-new", clientId);

//       socket.on("message", (data) => {
//         console.log("Received message:", data);
//       });

//       socket.on("disconnect", () => {
//         console.log("A client disconnected.");
//       });
//     });

//     res.end();
//   }
// }

import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";
import { NextApiResponseServerIO } from "../../../types/next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const io = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    const path = "/api/socket/io";
    console.log(`New Socket.io server... to ${path}`);
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: path,
      addTrailingSlash: false,
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("NEW SOCKET", socket.id);
    });
  }
  res.end();
};

export default io;
