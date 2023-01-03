const express = require("express");
const app = express();
const userRouter = require("./postman_api_routes");
const port = 3000;
app.use(express.json());
app.use("/users", userRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
