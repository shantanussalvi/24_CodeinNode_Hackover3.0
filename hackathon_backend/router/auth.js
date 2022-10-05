const express = require("express");
const bcrypt = require("bcryptjs");
const Razorpay = require("razorpay");

// Router for backend
const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");

// Using async-await
router.post("/register", async (req, res) => {
  // get the data sent by user
  const { name, email, phone, idProof, password } = req.body;

  // Validation
  if (!name || !email || !phone || !idProof || !password) {
    // 422 - Unprocessable entity
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    // check if email is present in the database
    // Await - waits for promise to return
    // find one returns entire document if email exists
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else {
      const user = new User({ name, email, phone, idProof, password });

      await user.save();

      res.status(201).json({ message: "user registered successfully" });
      // As this is try-catch if error occurs it will execute catch
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      // 422 - Unprocessable entity
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // jwt(json web token) - unique id
      const token = await userLogin.generateAuthToken();
      console.log(token);

      // Creates a cookie which expires after 30 days
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        // 400 - Bad request
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.json({ message: "user signed in sucessfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/orders", async (req, res) => {
  let { amount } = req.body;

  var instance = new Razorpay({
    key_id: "rzp_test_3Xp6ibi4KCOUo9",
    key_secret: "As4rOgHockNHA1W7hNEkuCDQ",
  });
  let order = await instance.orders.create({
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  });
  res.status(201).json({
    success: true,
    order,
    amount,
  });
});

router.post("/verify", async (req, res) => {
  try {
    const { order_id, payment_id, signature } = req.body;
    const sign = order_id + "" + payment_id;
    const expectedSign = crypto
      .createHmac("sha256", "As4rOgHockNHA1W7hNEkuCDQ")
      .update(sign.toString())
      .digest("hex");
    if (signature === expectedSign) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
