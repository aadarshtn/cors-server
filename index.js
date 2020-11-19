const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", async (req, res) => {
  const url = "https://9gag.com/v1/group-posts/group/default/type/hot";
  const response = await fetch(url).then((res) => res.json());
  res.send(response);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
