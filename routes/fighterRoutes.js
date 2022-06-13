const { Router } = require("express");
const FighterService = require("../services/fighterService");
const { responseMiddleware } = require("../middlewares/response.middleware");
const {
  createFighterValid,
  updateFighterValid,
} = require("../middlewares/fighter.validation.middleware");

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/api/fighters", function (req, res) {
  res.send("/api/fighters");
});
router.get("/api/fighters/:id", function (req, res) {
  res.send("/api/fighters/:id");
});
router.post("/api/fighters", function (req, res) {
  console.log(req.params);
  res.send("POST /api/fighters");
});
router.put("/api/fighters/:id", function (req, res) {
  console.log(req.params);
  res.send("PUT /api/fighters/:id");
});
router.delete("/api/fighters/:id", function (req, res) {
  console.log(req.params);
  res.send("DELETE /api/fighters/:id");
});

module.exports = router;
