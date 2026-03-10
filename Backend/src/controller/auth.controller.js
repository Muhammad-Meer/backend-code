const registerusermodel = require("../models/auth.model");
const foodpartnermodel = require("../models/food.partner.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register  user api

const registeruser = async (req, res) => {
  try {
    const { fullneam, email, password } = req.body;

    if (!fullneam || !email || !password) {
      return res.status(400).json({
        message: "everything is required",
      });
    }

    const isemailalreadyexist = await registerusermodel.findOne({
      email,
    });

    if (isemailalreadyexist) {
      return res.status(400).json({
        message: "user is already exist",
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);

    const user = await registerusermodel.create({
      fullneam,
      email,
      password: hashedpassword,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECREATE,
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "usrer create successfully",
      fullneam: user.fullneam,
      email: user.email,
      password: hashedpassword,
    });
  } catch (error) {
    console.log(error);
  }
};

// login  user api

const loginuser = async (req, res) => {
  const { fullneam, email, password } = req.body;

  const user = await registerusermodel.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "invalid email or password",
    });
  }

  const ispasswordismatched = await bcrypt.compare(password, user.password);

  if (!ispasswordismatched) {
    return res.status(400).json({
      message: "invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECREATE,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "user looged in successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullneam: user.fullneam,
    },
  });
};

// logout  user api

function logoutuser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "",
  });
}

// foodpartner   register api
async function registerfoodpartner(req, res) {
  try {
    const { fullneam, email, password } = req.body;

    if (!fullneam || !email || !password) {
      return res.status(400).json({
        message: "everything is required",
      });
    }

    const isemailisexixt = await foodpartnermodel.findOne({ email });

    if (isemailisexixt) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await foodpartnermodel.create({
      fullneam: fullneam,
      email: email,
      password: hashpassword
    });

    const token = jwt.sign({ id: user._id }, process.env.SECREATE);

    res.cookie("token", token, {
    });

    res.status(201).json({
      message: "foodpartner registered successfully",
      foodpartner: {
        fullneam: user.fullneam,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function loginfoodpartner(req, res) {
  const { email, password } = req.body;


  const user = await foodpartnermodel.findOne({
    email
  })

  if(!user) {
       return res.status(400).json({
        message:  "email password is invalid"
       })
  }
}

module.exports = { 
  registeruser,
  loginuser, logoutuser,
  registerfoodpartner,
 loginfoodpartner,
   };
