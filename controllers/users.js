const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login
};

// function to sign up a user/ assign them a token
async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({
            token
        });
    } catch (err) {
        res.status(400).json({
            message: "Something went wrong!"
        });
    }
}

// function to login a user/ check or update a token
async function login(req, res) {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) return res.status(401).json({
            err: "bad credentials, try again please."
        });
        user.comparePassword(req.body.pw, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user);
                res.json({
                    token
                });

            } else {
                return res.status(401).json({
                    err: "Bad credentials, please try again."
                });
            }
        });
    } catch (err) {
        return res.status(401).json({
            err: "Invalid login, please try again"
        });
    }
}


// jwt helper function
function createJWT(user) {
    return jwt.sign({
            user
        },
        SECRET, {
            expiresIn: "24h"
        }
    );
}