const notLogged = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("login");
  }
  next();
};

module.exports = notLogged;
