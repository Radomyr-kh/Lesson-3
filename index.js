const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/index");
routes(app);

app.use("/", express.static("./client/build"));

const port = 3050;
app.listen(port, () => {});

exports.app = app;

/****************************** */
// USER:
// app.get("/api/users", function (req, res) {
//   res.send("/api/users");
// });
// app.get("/api/users/:id", function (req, res) {
//   res.send("/api/users/:id");
// });
// app.post("/api/users", function (req, res) {
//   console.log(req.params);
//   res.send("PUT /api/users/:id");
// });
// app.put("/api/users/:id", function (req, res) {
//   console.log(req.params);
//   res.send("PUT /api/users/:id");
// });
// app.delete("/api/users/:id", function (req, res) {
//   console.log(req.params);
//   res.send("DELETE /api/users/:id");
// });

// FIGHTER
// app.get("/api/fighters", function (req, res) {
//   res.send("/api/fighters");
// });
// app.get("/api/fighters/:id", function (req, res) {
//   res.send("/api/fighters/:id");
// });
// app.post("/api/fighters", function (req, res) {
//   if (req.query.name) {
//     console.log(req.query);
//   } else {
//     console.log(null);
//   }
//   res.send("POST /api/fighters");
// });
// app.put("/api/fighters/:id", function (req, res) {
//   console.log(req.params);
//   res.send("PUT /api/fighters/:id");
// });
// app.delete("/api/fighters/:id", function (req, res) {
//   console.log(req.params);
//   res.send("DELETE /api/fighters/:id");
// });
