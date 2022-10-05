const express = require('express');
const bcrypt = require('bcryptjs');
// Router for backend
const router = express.Router();

require('../db/conn');
const User = require('../models/userSchema');
const Organizer = require('../models/organizerSchema');

router.post('/organize', async (req, res) => {
    const organizer = req.body;
    if(organizer){
        const org = new Organizer(organizer);
        await org.save();
        res.status(201).json({ message: "event created successfully" });
    }else{
        res.status(500).json({message: "Database error"});
    }
})

router.get('/get-organize', async (req,res)=>{
    try{
      const org = await Organizer.find();
      console.log("Hello "+org);
      return res.status(200).json({
        success: true,
        count: org.length,
        data: org,
      });
      
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'server error' });
    }
  });

// Using async-await
router.post('/register', async (req, res) => {
    // get the data sent by user
    const { name, email, phone, idProof, password, cpassword } = req.body;

    // Validation
    if ( !name || !email || !phone || !idProof || !password ||!cpassword ) {
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
        } else if (password !== cpassword) {
            return res.status(422).json({ error: "Password and confirm password not matching" });
        } else {
            const user = new User({ name, email, phone, idProof, password, cpassword });

            await user.save();

            res.status(201).json({ message: "user registered successfully" });
            // As this is try-catch if error occurs it will execute catch
        }
    } catch (err) {
        console.log(err)
    }
})

// login route
router.post('/signin', async (req, res) => {
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
                expires: new Date(Date.now()+25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                // 400 - Bad request
                res.status(400).json({ error: 'Invalid credentials' });
            } else {
                res.json({ message: 'user signed in sucessfully' });
            }
        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;