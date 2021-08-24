const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.end("FACEBOOK LOGIN");
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

server.listen(port, () => {
  console.log(`Facebook Login App Listening at http://localhost:${port}`);
});
