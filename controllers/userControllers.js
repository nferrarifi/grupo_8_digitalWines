const { query } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
let { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
/* const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
 */
const db = require("../models/index");

userControllers = {
  login: async (req, res) => {
    const user = req.session.user;
    res.render("users/login", { user });
  },

  loginProcess: async (req, res) => {
    const user = req.session.user;
    //Validaciones
    let errors = validationResult(req).errors;
    if (errors.length > 0) {
      console.log(errors);
      return res.render("users/login", { errors, user });
    }
    //Proceso de login
    const usuarioBuscado = await db.usuario.findOne({
      where: { email: req.body.email },
    });

    if (usuarioBuscado) {
      let contrasenaOk = bcrypt.compareSync(
        req.body.password,
        usuarioBuscado.password
      );
      if (contrasenaOk) {
        delete usuarioBuscado.password;
        req.session.user = usuarioBuscado;

        if (req.body.remember) {
          res.cookie("userMail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }

        return res.redirect("/");
      } else {
        res.render("users/login", { user });
      }
    } else {
      res.render("users/login", { user });
    }
  },

  register: (req, res) => {
    const user = req.session.user;
    res.render("users/register", { user });
  },

  index: (req, res) => res.render("users/userlist", { users }),

  createUser: async (req, res) => {
    const user = req.session.user;
    //Validaciones
    let errors = validationResult(req).errors;
    //Validacion del mail repetido
    let emailRepetido = await db.usuario.findOne({
      where: { email: req.body.email },
    });
    if (emailRepetido) {
      errors.push({
        msg: "Ya existe un usuario con ese email",
      });
    }
    //Retorno a la pagina de registro con impresion de errores
    if (errors.length > 0) {
      console.log(errors);
      return res.render("users/register", { errors, user });
    }
    //Creacion de nuevo usuario y hasheo de contraseña
    let hashedPassword = bcrypt.hashSync(req.body.password, 2);
    let { nombre, apellido, email, direccion } = req.body;
    await db.usuario.create({
      nombre: nombre,
      apellido: apellido,
      password: hashedPassword,
      email: email,
      direccion: direccion,
      imagen: req.file.filename,
      admin: 0,
    });

    res.redirect("/");
  },
  profile: (req, res) => {
    //console.log(req.session);
    const user = req.session.user;
    res.render("users/profile", { usuarioBuscado: req.session.user, user });
  },

  edit: async (req, res) => {
    const user = req.session.user;
    console.log(req.session.user);
    res.render("users/edit", { usuario: req.session.user, user });
  },
  editUser: async (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 2);
    let { nombre, apellido, email, direccion } = req.body;
    await db.usuario.update(
      {
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: direccion,
        imagen: req.file.filename,
      },
      {
        where: { usuario_id: req.session.user.usuario_id },
      }
    );
    res.redirect("/");
  },
};

module.exports = userControllers;
