require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const cors = require("cors");
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

// ver oq isso faz
app.use(express.static(path.join(__dirname, "../frontend")));

// dps arrumar p um mlhr
app.post("/api/getHTML", (req, res) => {
  const page = req.query.p;
  if (!page) return res.status(400).send("Parâmetro p é obrigatório");

  const filePath = path.join(__dirname, "../frontend/", page + ".html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(404).send("Página não encontrada");
    res.send(data);
  });
});

app.use("/user", userRouter);
app.use("/matter", matterRouter);
app.use("/lesson", lessonRouter);
app.use("/task", taskRouter);

module.exports = app;
