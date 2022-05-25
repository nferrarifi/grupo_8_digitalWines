const req = require("express/lib/request");
const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

function userLogged(req, res, next) {
  let emailCookie = req.cookies.userMail;

  let userFromCookie = users.find((element) => element.email == emailCookie);
  console.log(userFromCookie);

  if (userFromCookie) {
    delete userFromCookie.password;
    req.session.user = userFromCookie;
    console.log(req.session);
  }

  next();
}

module.exports = userLogged;
