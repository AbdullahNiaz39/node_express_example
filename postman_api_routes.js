const express = require("express");
// const app = express();
const router = express.Router();
const users = require("./Routes/user.json");

//app.use(express.json());

//get all user from user.json
router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    users,
  });
});

//create new user
router.post("/", (req, res) => {
  console.log(req.body);
  const newUser = {
    name: req.body.name,
    age: req.body.age,
    id: users.length + 1,
  };
  res.status(201).json({
    status: "success",
    users: newUser,
  });
});

///edit specific key for patch and edit for whole object for put
router.put("/:id", (req, res) => {
  let user = users.find((el) => el.id === +req.params.id);
  user = { ...users, ...req.body };
  res.status(201).json({
    status: "success",
    user,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let user = users.find((el) => el.id === +id);

  res.status(200).json({
    staus: "success",
    user,
  });
});

module.exports = router;
