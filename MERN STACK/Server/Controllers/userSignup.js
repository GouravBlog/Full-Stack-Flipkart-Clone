import User from "../Model/userschema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      res.status(401).json({ message: "user already exist" });
    } else {
      let user = new User(req.body);
      user = await user.save();
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const userLogin = async (req, res) => {
  try {
    const firstname = req.body.firstname;
    const password = req.body.password;
    let user = await User.findOne({ firstname, password });
    res.status(200).json({ message: "user succesfully login" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
