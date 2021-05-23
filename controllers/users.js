const User = require("../models/user");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

// function to sign up a user/ assign them a token
async function signup(request, response) {
  const user = new User(request.body);
  try {
    await user.save();
    const token = createJWT(user);
    response.json({
      token
    });
  } catch (error) {
    response.status(400).json({
      message: "Something went wrong!"
    });
  }
}

// function to login a user/ check or update a token
async function login(request, response) {
  try {
    const user = await User.findOne({
      email: request.body.email
    });
    if (!user)
      return res.status(401).json({
        error: "Bad credentials, please try again."
      });
    user.comparePassword(request.body.pw, (error, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        response.json({
          token
        });
      } else {
        return response.status(401).json({
          error: "Bad credentials, please try again."
        });
      }
    });
  } catch (error) {
    return response.status(401).json({
      error: "Invalid login, please try again"
    });
  }
}

// jwt helper function
function createJWT(user) {
  return jwt.sign(
    {
      user
    },
    SECRET,
    {
      expiresIn: "24h"
    }
  );
}
