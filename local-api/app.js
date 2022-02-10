const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const { posts } = require("./data.js");

app.use(cors());

//localhost:8080/api/posts로 설정
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});
