import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res)=> {
    res.json({
    uri: "/",
     message: "Hello Node.js",
    });
});

app.get("/omikuji", (req, res) => {
  const omikuji = ["大吉", "中吉", "末吉", "小吉", "凶"];
  const min = 0;
  const max = omikuji.length - 1;
  const index = Math.floor(Math.random() * (max - min +1)) + min;
res.json({
  uri: "/omikuji",
  message: omikuji[index]
});

});

app.get("/janken", (req, res) => {
  res.json({
    uri: "/janken",
    message: "これはじゃんけん"
  });
  
  });

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);

});