import dbConnection from "../dbConnection.js";
import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import UserModel from "../Models/UserModel.js";
import TokenController from "./TokenController.js";

class AuthenticationController {
  async signUp(req, res) {
    const data = req.body;
    if (data.password && data.name && data.username && data.email) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(data.password, salt);
      const user = new User(req.body);
      user.password = hash;
      user.save(function (err, doc) {
        if (err) return res.status(400).json({ err: err.message });
        const payload = {
          name: doc.name,
          username: doc.username,
          email: doc.email,
        };
        TokenController.generate(payload).then((token) => {
          return res.json({ user, token });
        });
      });
    } else {
      res.status(400).json({ err: "some data is missing" });
    }
  }
  async login(req, res) {
    const data = req.body;
    UserModel.findOne({ username: data.username }, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        if (!doc) {
          res.json({ err: "wrong username" });
        } else {
          bcrypt.compare(data.password, doc.password).then((valid) => {
            if (valid) {
              const payload = {
                name: doc.name,
                username: doc.username,
                email: doc.email,
              };
              const token = TokenController.generate(payload).then((token) => {
                return res.json({ user: doc, token });
              });
            } else {
              return res.json({ err: "wrong User name or password" });
            }
          });
        }
      }
    });
    // return res.json();
  }
}

export default new AuthenticationController();
