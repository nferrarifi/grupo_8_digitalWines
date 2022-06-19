const express = require("express");
const usersRouter = express.Router();
const multer = require("multer");
const path = require("path");
const userControllers = require("../controllers/userControllers");
const userRegister = require("../middlewares/userRegister");
const alreadyLogged = require("../middlewares/alreadyLogged");
const notLogged = require("../middlewares/notLogged");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img/users"));
  },
  filename: (req, file, cb) => {
    const newFilename =
      "profile" + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

usersRouter.get("/login", alreadyLogged, userRegister, userControllers.login);

usersRouter.post("/login", userRegister, userControllers.loginProcess);

usersRouter.get(
  "/register",
  alreadyLogged,
  userRegister,
  userControllers.register
);

usersRouter.get("/userlist", alreadyLogged, userControllers.index);

usersRouter.get("/profile", userControllers.profile);

usersRouter.post(
  "/register",
  upload.single("imagenUsuario"),
  userControllers.createUser
);

usersRouter.get("/useredit", notLogged, userControllers.edit);

usersRouter.post(
  "/useredit",
  upload.single("imagenUsuario"),
  userControllers.editUser
);

module.exports = usersRouter;
