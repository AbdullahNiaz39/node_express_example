const express = require("express");
const app = express();
const user = require("./Routes/users");
const port = 3000;

app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
