var express = require("express");
var router = express.Router();
const user = require("./user.json");
router.get("/:id", function (req, res) {
  res.send(user.find((el) => el.id == req.params.id));
});

// router.get("/:name", function (req, res) {
//   res.send(user.find((el) => el.name == req.params.name));
//   console.log(res);
// });

module.exports = router;
