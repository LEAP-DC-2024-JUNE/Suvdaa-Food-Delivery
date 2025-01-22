import express from "express";

const server = express();
const PORT = 3000;

server.get("/hello", (request, response) => {
  response.send("Hello world!");
});

server.listen(PORT, () => {
  console.log(`server started http://localhost:${PORT}`);
});
