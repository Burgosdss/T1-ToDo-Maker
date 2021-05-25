const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

// Custom middleware, checks for token, replace with '', decode user
module.exports = function (request, response, next) {
  let token =
    request.get("Authorization") || request.query.token || request.body.token;
  if (token) {
    token = token.replace("Bearer ", "");

    jwt.verify(token, SECRET, function (error, decoded) {
      if (error) {
        next(error);
      } else {
        request.user = decoded.user;
        next();
      }
    });
  } else {
    next();
  }
};
