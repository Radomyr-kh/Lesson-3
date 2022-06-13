const { Router } = require("express");
const UserService = require("../services/userService");
const {
  createUserValid,
  updateUserValid,
} = require("../middlewares/user.validation.middleware");
const { responseMiddleware } = require("../middlewares/response.middleware");

const router = Router();

// TODO: Implement route controllers for user
router.get("/api/users", createUserValid, function (req, res) {
  res.send("GET /api/users");
  console.log(req.body);
});

router.post("/api/users", function (req, res) {
  console.log(req.body);
  res.send("POST /api/users/:id");
});

module.exports = router;
