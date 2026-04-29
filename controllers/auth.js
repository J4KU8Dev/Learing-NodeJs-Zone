exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/orders",
    pageTitle: "Login",
  });
};
