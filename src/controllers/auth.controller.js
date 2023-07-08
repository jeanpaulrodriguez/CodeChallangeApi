import { createToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    const createUser = new User({
      username,
      email,
      password: hash,
    });
    const userSaved = await createUser.save();

    const token = await createToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
    res.send("registrando");
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => res.send("logueado");
