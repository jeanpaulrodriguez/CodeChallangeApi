import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const createUser = new User({
      username,
      email,
      password,
    });
    const userSaved = await createUser.save();
    res.json(userSaved);
    res.send("registrando");
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => res.send("logueado");
