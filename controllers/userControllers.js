const { query } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");
const bcrypt = require ('bcryptjs')
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

userControllers = {
    login: (req, res) => {
        res.render("users/login");
      },
    
    register: (req, res) => {
        res.render("users/register");
        console.log (users)
      },

    index: (req,res) => res.render ("users/userlist", {users}),

    createUser: (req,res) => {
    //Creacion de nuevo usuario y hasheo de contraseña
    let newUser = {
        id: (users.length) + 1  ,
        ...req.body,
        imagenUsuario: req.file.filename,
        admin: false
    }

    let hashedPassword = bcrypt.hashSync(newUser.password, 10)
    newUser.password = hashedPassword

    console.log (newUser)
    //Insercion del nuevo usuario en archivo JSON
    users.push(newUser)
    fs.writeFileSync(usersFilePath, JSON.stringify(users), "utf-8")

    res.redirect ("/")
    }




}


module.exports = userControllers