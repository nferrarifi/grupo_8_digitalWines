const express = require("express");
const usersRouter = express.Router();
const multer = require("multer");
const path = require("path");
const userControllers = require("../controllers/userControllers");
const userRegister = require("../middlewares/userRegister");
const alreadyLogged = require("../middlewares/alreadyLogged");
const notLogged = require("../middlewares/notLogged");
/* const { register } = require("../../micuota/controller/userController"); */
const { check } = require("express-validator");

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

//Validations
const registerValidation = [
  check("nombre")
    .notEmpty()
    .withMessage("Es obligatorio ingresar un nombre")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener un minimo de 2 caracteres"),
  check("apellido")
    .notEmpty()
    .withMessage("Es obligatorio ingresar un apellido")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener un minimo de 2 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("Es obligatorio ingresar un email")
    .isEmail()
    .withMessage("Por favor ingrese un email válido"),
  check("password")
    .notEmpty()
    .withMessage("Es obligatorio ingresar una contraseña")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener un minimo de 8 caracteres"),
];

const loginValidation = [
  check("email")
    .notEmpty()
    .withMessage("Es obligatorio ingresar un email")
    .isEmail()
    .withMessage("Por favor ingrese un email válido"),
  check("password")
    .notEmpty()
    .withMessage("Es obligatorio ingresar una contraseña"),
];

usersRouter.get("/login", alreadyLogged, userRegister, userControllers.login);

usersRouter.post(
  "/login",
  userRegister,
  loginValidation,
  userControllers.loginProcess
);

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
  registerValidation,
  userControllers.createUser
);

usersRouter.get("/useredit", notLogged, userControllers.edit);

usersRouter.post(
  "/useredit",
  upload.single("imagenUsuario"),
  userControllers.editUser
);

module.exports = usersRouter;
