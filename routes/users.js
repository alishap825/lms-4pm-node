const express = require('express');
const User = require("../models/user"); //this way we can use user of models in this as well
const bcryptjs = require('bcryptjs');
const router = express.Router();

router.post("/register", async (req, res) => { 
    //using async in this because we have to save the data while user is registering
    const { email, password, fullName } = req.body; 
    const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

    const user = new User({ 
        email,
        password: hashedPassword, 
        fullName
    });
    try {
        const savedUser = await user.save();
        res.json({
            message: "User registered successfully",
            user: savedUser,
        })
        
    } catch (err) {
        res.json({
            error: err,
        });
}
});

router.post("/login", async (req, res)=> {
 const {email, password} = req.body;
 try{
    const user = await User.findOne({ email });
    const checkPassword = bcryptjs.compareSync(password, user.password);
    if (checkPassword){ // writing this and (checkPassword == true) is same thing
        res.json({
            message: "Validation successful! User login done!"
        })
    } else {
        res.json({
            message: "Passwords don't match!"
        })
    }
 } catch(err) {
     res.json({
         error: err
     })

    }
})
module.exports = router;