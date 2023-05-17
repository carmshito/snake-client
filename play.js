const net = require("net");

// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "172.29.63.124",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connecting ...");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

connect();