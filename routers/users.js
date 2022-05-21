const express = require("express");
const usersRouter = express.Router();
const multer = require("multer");
const path = require("path");
const userControllers = require("../controllers/userControllers");

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

usersRouter.get("/login", userControllers.login);

usersRouter.post("/login", userControllers.loginProcess);


usersRouter.get("/register", userControllers.register);

usersRouter.get ("/userlist", userControllers.index)

usersRouter.get ("/profile", userControllers.profile)

usersRouter.post ("/register", upload.single("imagenUsuario"), userControllers.createUser )

module.exports = usersRouter