require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// routers
const userRouter = require("./src/routers/user_router");
const matterRouter = require("./src/routers/matter_router");
const lessonRouter = require("./src/routers/lesson_router");
const taskRouter = require("./src/routers/task_router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Página inicial");
});

app.use(express.static(path.join(__dirname, "../frontend")));


app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});


app.use("/user", userRouter);
app.use("/matter", matterRouter);
app.use("/lesson", lessonRouter);
app.use("/task", taskRouter);

module.exports = app;
