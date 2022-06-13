const { Router } = require("express");
const UserService = require("../services/userService");
const {
  createUserValid,
  updateUserValid,
} = require("../middlewares/user.validation.middleware");
const { responseMiddleware } = require("../middlewares/response.middleware");

const router = Router();

// TODO: Implement route controllers for user
router.get("/api/users", function (req, res) {
  res.send("/api/users");
});
router.get("/api/users/:id", function (req, res) {
  res.send("/api/users/:id");
});
router.post("/api/users", function (req, res) {
  console.log(req.params);
  res.send("PUT /api/users/:id");
});
router.put("/api/users/:id", function (req, res) {
  console.log(req.params);
  res.send("PUT /api/users/:id");
});
router.delete("/api/users/:id", function (req, res) {
  console.log(req.params);
  res.send("DELETE /api/users/:id");
});

module.exports = router;
