const express = require("express");
const usersRouter = express.Router();
const multer = require("multer");
const path = require("path");
const userControllers = require("../controllers/userControllers");
const userRegister = require("../middlewares/userRegister")

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

usersRouter.get("/login",userRegister, userControllers.login);

usersRouter.post("/login", userRegister,userControllers.loginProcess);


usersRouter.get("/register",userRegister, userControllers.register);

usersRouter.get ("/userlist", userControllers.index)

usersRouter.get ("/profile", userControllers.profile)

usersRouter.post ("/register", upload.single("imagenUsuario"), userControllers.createUser )

module.exports = usersRouter