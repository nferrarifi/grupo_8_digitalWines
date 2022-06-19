const { query } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");
const bcrypt = require("bcryptjs");
/* const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
 */
const db = require("../models/index");

userControllers = {
  login: async (req, res) => {
    res.render("users/login");
  },
  loginProcess: async (req, res) => {
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

        return res.redirect("/profile");
      } else {
        res.render("users/login");
      }
    } else {
      res.render("users/login");
    }
  },

  register: (req, res) => {
    res.render("users/register");
  },

  index: (req, res) => res.render("users/userlist", { users }),

  createUser: async (req, res) => {
    //Creacion de nuevo usuario y hasheo de contraseña
    /*     let newUser = {
      id: users.length + 1,
      ...req.body,
      imagenUsuario: req.file.filename,
      admin: false,
    }; */

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
    /*     //Insercion del nuevo usuario en archivo JSON
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users), "utf-8"); */

    res.redirect("/");
  },
  profile: (req, res) => {
    //console.log(req.session);

    res.render("users/profile", { usuarioBuscado: req.session.user });
  },

  edit: async (req, res) => {
    console.log(req.session.user);
    res.render("users/edit", { usuario: req.session.user });
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
    res.redirect("users/edit");
  },
};

module.exports = userControllers;
